import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const usePartnerItems = (itemName, reset, get, add, edit, deactivate) => {
    const [modalActive, setModalActive] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [id, setId] = useState('');
    const items = useSelector((state) => state.partner[`${itemName}`]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset());
        dispatch(get());
    }, [dispatch]);

    const onClickAdd = () => {
        setIsEditing(true);
        setIsAdding(true);
    };

    const onSubmit = (formData) => {
        formData.isAdding ? dispatch(add(formData)) : dispatch(edit(formData));
        dispatch(reset());
        setModalActive(true);
        setIsEditing(false);
        setIsAdding(false);
    };

    const onClick = (item) => {
        setId(item.id);
        setIsEditing(true);
    };

    const onDeactivate = (item) => {
        dispatch(deactivate(item.id));
        dispatch(get());
        setIsEditing(false);
        setIsAdding(false);
    };

    return {
        modalActive,
        setModalActive,
        isEditing,
        setIsEditing,
        isAdding,
        setIsAdding,
        id,
        setId,
        items,
        onClickAdd,
        onSubmit,
        onClick,
        onDeactivate,
    };
};

export default usePartnerItems;