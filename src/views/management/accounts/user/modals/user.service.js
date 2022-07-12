import { computed, ref, unref } from "vue";

const currentUser = ref({});
const editing = ref(false);

export function useCurrentUser(){

    function setEditing(state){
        editing.value = state;
    }

    const getEditing = computed(() => unref(editing));

    function setCurrentUser(user){
        currentUser.value = user;
    }

    const getCurrentUser = computed(() => unref(currentUser));

    return {
        setCurrentUser,
        getCurrentUser,
        setEditing,
        getEditing,
    }
}
