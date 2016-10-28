import Dexie from 'dexie';

const StorageWrapper = (() => {
	let db;
	const db_name = 'favorite_tracks';
	const db_store = 'tracks';

	const initialize = () => {
		db = new Dexie(db_name);
		db.version(1).stores({
			[db_store]: 'name'
		});

		db.open().catch((e) => {
			console.error(`IndexDb Open Failed: ${e}`);
		});
	};

	const add = (line, cb) => {
		if(!db) {
			throw new Error('StorageWrapper: Uninitialized database');
		}

		return db[db_store].put({ name: line })
			.then((favoriteLine) => {
				cb({ success: true, name: line });
			}).catch(function(e) {
				cb({ success: false, message: e });
			});
	};

	const getAllTracks = (cb) => {
		if(!db) {
			throw new Error('StorageWrapper: Uninitialized database');
		}

		return db[db_store].toArray()
			.then((tracks) => {
				cb({ success: true, tracks: tracks });
			}).catch(function(e) {
				cb({ success: false, message: e });
			});
	};

	const removeFavorite = (line, cb) => {
		return db[db_store].toArray()
			.then((tracks) => {
				const myTracks = tracks.split(',');
				const updatedTracks = myTracks.filter((track) => track !== line).join(',');
				return add(updatedTracks, cb);
			}).catch(function(e) {
				cb({ success: false, mesage: e });
			});
	};

	const _reset = () => {
		db = null;
	};

	return {
		initialize,
		add,
		getAllTracks,
		removeFavorite,
		_reset
	};
})();

export default StorageWrapper;
