import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, } from "./journalSlice";
import { collection, doc, setDoc } from 'firebase/firestore/lite'



export const addNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());
        // Usando Firebase database
        // console.log(getState())
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        // Ahora hacemos los dispatch


        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    };
};

export const startLoadingNotes = () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if (!uid) throw new Error('UID del usuario no axiste');

        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));

    };
};