import { collection, getDocs } from "firebase/firestore";
import { database } from "../config";

const getAllData = async (collectionName) => {
	const returnData = [];
	await getDocs(collection(database, collectionName)).then((querySnapshot) => {
		const newData = querySnapshot.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		returnData.push(...newData);
	});

	return returnData;
};

export { getAllData };
