import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetLessonData} from "../reducers/lessonReducer";
import {getCourseModules} from "../reducers/courseReducer";
import {resetTaskData} from "../reducers/taskReducer";
import {resetTestData} from "../reducers/testReducer";

const useMentorCourseModules = (courseId, setIsCourseActive) => {
    const [modalActive, setModalActive] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [moduleType, setModuleType] = useState('');
    const [id, setId] = useState('');
    const course = useSelector((state) => state.course)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourseModules(courseId))
    }, [dispatch]);

    const onClickAddLesson = () => {
        setIsEditing(true);
        setIsAdding(true);
        setModuleType('lesson');
    }
    const onClickAddTask = () => {
        setIsEditing(true);
        setIsAdding(true);
        setModuleType('task');
    }
    const onClickAddTest = () => {
        setIsEditing(true);
        setIsAdding(true);
        setModuleType('test');
    }
    const onClickEditLesson = (lesson) => {
        setIsEditing(true);
        setId(lesson.id);
        setModuleType('lesson');
    }
    const onClickEditTask = (task) => {
        setIsEditing(true);
        setId(task.id);
        setModuleType('task');
    }
    const onClickEditTest = (test) => {
        setIsEditing(true);
        setId(test.id);
        setModuleType('test');
    }


    const onBack = () => {
        dispatch(resetLessonData());
        dispatch(resetTaskData());
        dispatch(resetTestData());
        setIsCourseActive(false);
    }

    return {
        modalActive,
        setModalActive,
        isEditing,
        setIsEditing,
        isAdding,
        setIsAdding,
        id,
        setId,
        course,
        moduleType,
        onClickAddLesson,
        onClickEditLesson,
        onClickAddTask,
        onClickEditTask,
        onClickAddTest,
        onClickEditTest,
        onBack
    };
};

export default useMentorCourseModules;