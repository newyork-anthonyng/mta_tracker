jest.mock('dexie');
const dexie = require('dexie');
import StorageWrapper from './StorageWrapper';

afterEach(() => {
	StorageWrapper._reset();
});

it('should initialize database', () => {
	let constructorInvoked = false;
	let versionInvoked = false;
	let storeInvoked = false;
	let openInvoked = false;
	let catchInvoked = false;

	dexie.mockImplementation((db_name) => {
		constructorInvoked = db_name;

		return {
			version: jest.fn(function(version) {
				versionInvoked = version;
				return this;
			}),
			stores: jest.fn(function(db) {
				storeInvoked = db;
				return this;
			}),
			open: jest.fn(function() {
				openInvoked = true;
				return this;
			}),
			catch: jest.fn(function() {
				catchInvoked = true;
			})
		};
	});

	StorageWrapper.initialize();

	expect(constructorInvoked).toEqual('favorite_tracks');
	expect(versionInvoked).toEqual(1);
	expect(storeInvoked).toEqual({ tracks: 'name' });
	expect(openInvoked).toEqual(true);
	expect(catchInvoked).toEqual(true);
});

it('should add new track and run callback with success', () => {
	let putInvoked = false;
	let cbInvoked = false;
	const cb = val => cbInvoked = val;

	dexie.mockImplementation((db_name) => {
		return {
			version: jest.fn().mockReturnThis(),
			stores: jest.fn().mockReturnThis(),
			open: jest.fn().mockReturnThis(),
			catch: jest.fn(),
			tracks: {
				put: (line) => {
					putInvoked = line;
					return new Promise((resolve, reject) => {
						process.nextTick(
							() => {resolve(line)}
						);
					});
				}
			}
		};
	});

	StorageWrapper.initialize();
	var deferred = StorageWrapper.add('L', cb);
	expect(putInvoked).toEqual({ name: 'L' });

	return deferred.then(function() {
		expect(cbInvoked).toEqual({ success: true, name: 'L' });
	});
});

it('should run callback with success false if promise is rejected', () => {
	let cbInvoked = false;
	const cb = val => cbInvoked = val;

	dexie.mockImplementation((db_name) => {
		return {
			version: jest.fn().mockReturnThis(),
			stores: jest.fn().mockReturnThis(),
			open: jest.fn().mockReturnThis(),
			catch: jest.fn(),
			tracks: {
				put: (line) => {
					return new Promise((resolve, reject) => {
						process.nextTick(
							() => {reject(line)}
						);
					});
				}
			}
		};
	});

	StorageWrapper.initialize();
	const deferred = StorageWrapper.add('L', cb);

	return deferred.then(function() {
		expect(cbInvoked).toEqual({
			success: false,
			message: { name: 'L' }
		});
	});
});

it('should throw error if calling .add() and db not initialized', () => {
	const error = () => {
		StorageWrapper.add('L', () => {});
	};

	expect(error).toThrowError('StorageWrapper: Uninitialized database');
});

it('should get all tracks', () => {
	let cbInvoked = false;
	const cb = (tracks) => { cbInvoked = tracks; };

	dexie.mockImplementation((db_name) => {
		return {
			version: jest.fn().mockReturnThis(),
			stores: jest.fn().mockReturnThis(),
			open: jest.fn().mockReturnThis(),
			catch: jest.fn(),
			tracks: {
				toArray: () => {
					return new Promise((resolve, reject) => {
						process.nextTick(
							() => {resolve(['A', 'D'])}
						);
					});
				}
			}
		};
	});

	StorageWrapper.initialize();
	const deferred = StorageWrapper.getAllTracks(cb);
	return deferred.then(function() {
		expect(cbInvoked).toEqual({
			success: true,
			tracks: ['A', 'D']
		});
	});
});

it('should throw error if calling .getAllTracks() and db not initialized', () => {
	const error = () => {
		StorageWrapper.getAllTracks(() => {});
	};

	expect(error).toThrowError('StorageWrapper: Uninitialized database');
});

it('should delete line', () => {
	let cbInvoked = false;
	const cb = (tracks) => { cbInvoked = tracks; };

	dexie.mockImplementation((db_name) => {
		return {
			version: jest.fn().mockReturnThis(),
			stores: jest.fn().mockReturnThis(),
			open: jest.fn().mockReturnThis(),
			catch: jest.fn(),
			tracks: {
				toArray: () => {
					return new Promise((resolve, reject) => {
						process.nextTick(
							() => {resolve('A,B')}
						);
					});
				},
				put: (line) => {
					return new Promise((resolve, reject) => {
						process.nextTick(
							() => {resolve(line)}
						);
					});
				}
			}
		};
	});

	StorageWrapper.initialize();
	const deferred = StorageWrapper.removeFavorite('A', cb);
	return deferred.then(function() {
		expect(cbInvoked).toEqual({
			success: true,
			name: 'B'
		});
	});
});
