import { createSlice } from '@reduxjs/toolkit';


export const journalSlice = createSlice({

    name: 'journal',

    initialState: {
        isSaving: false,
        messageSave: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'abac5844',
        //     title: '',
        //     body: '',
        //     date: 1225488,
        //     imgUrals: ['http://foto1.jpg', 'http://foto2.jpg'],
        // }

    },

    reducers: {

        savingNewNote: (state) => {
            state.isSaving = true;
        },

        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },

        setActiveNote: (state, action) => {
            state.active = action.payload;
        },

        setNotes: (state, action) => {
            state.notes = action.payload;
        },

        setSave: (state) => {

        },

        updateNote: (state, action) => {

        },

        deleteNoteById: (state, action) => {

        },

    },

});
// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSave,
    updateNote,
    deleteNoteById, } = journalSlice.actions