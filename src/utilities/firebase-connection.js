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

const updateUserValueField = async (
	collectionName,
	documentId,
	fieldName,
	newValue,
	setShouldRefetch
) => {
	try {
		const docRef = database.collection(collectionName).doc(documentId);

		// Update the specified field in the document
		await docRef.update({
			[fieldName]: newValue,
		});
		setShouldRefetch(true);

		console.log(`${fieldName} Field updated successfully!`);
	} catch (error) {
		console.error(`Error updating ${fieldName} field:`, error);
	}
};

export { getAllData, updateUserValueField };
