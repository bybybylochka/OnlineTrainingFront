import React from 'react';
import arrow from "../../../assets/arrowToCourses.png";
import ModuleHighlight from "./ModuleHighlight";
import LessonForm from "./LessonForm";
import useMentorCourses from "../../../hooks/useMentorCourses";
import Modal from "../../modal/Modal";
import TaskForm from "./TaskForm";
import TestForm from "./TestForm";

const CourseModules = ({courseId, setIsCourseActive}) => {
    const {
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
    } = useMentorCourses(courseId, setIsCourseActive)


    return (
        <div className={'mentor-courses__modules'}>
            <div className={'modules__title'}>
                <button className={'button back button_transparent'} onClick={onBack}>
                    <img src={arrow} alt={'arrow back'}/>
                </button>
                <p>Курс: {course.name}</p>
            </div>
            {isEditing
                ? moduleType === 'lesson'
                    ? <LessonForm isAdding={isAdding}
                                  setIsEditing={setIsEditing}
                                  lessonId={id}
                                  setIsAdding={setIsAdding}
                                  setModalActive={setModalActive}/>
                    : moduleType === 'task'
                        ? <TaskForm isAdding={isAdding}
                                    setIsEditing={setIsEditing}
                                    taskId={id}
                                    setIsAdding={setIsAdding}
                                    setModalActive={setModalActive}/>
                        : <TestForm isAdding={isAdding}
                                    setIsEditing={setIsEditing}
                                    testId={id}
                                    setIsAdding={setIsAdding}
                                    setModalActive={setModalActive}/>
                : <div>
                    <div className={'modules'}>
                        <div className={'modules__lessons'}>
                            <p className={'modules__lessons-title'}>Уроки</p>
                            <div className={'modules__lessons-items'}>
                                <button className={'button button_transparent'}
                                        onClick={onClickAddLesson}
                                        disabled={course.status !== 'NOT_FILLED_IN'}
                                >
                                    Добавить
                                </button>
                                {course.modules.lessons.map((module) => <ModuleHighlight
                                    module={module}
                                    onClick={() => onClickEditLesson(module)}/>)}
                            </div>
                        </div>
                        <div className={'modules__tasks'}>
                            <p className={'modules__tasks-title'}>Задания</p>
                            <div className={'modules__tasks-items'}>
                                <button className={'button button_transparent'}
                                        onClick={onClickAddTask}
                                        disabled={course.status !== 'NOT_FILLED_IN'}
                                >
                                    Добавить
                                </button>
                                {course.modules.tasks.map((module) => <ModuleHighlight
                                    module={module}
                                    onClick={() => onClickEditTask(module)}/>)}
                            </div>
                        </div>
                        <div className={'modules__tests'}>
                            <p className={'modules__tests-title'}>Тесты</p>
                            <div className={'modules__tests-items'}>
                                <button className={'button button_transparent'}
                                        onClick={onClickAddTest}
                                        disabled={course.status !== 'NOT_FILLED_IN'}
                                >
                                    Добавить
                                </button>
                                {course.modules.tests.map((module) => <ModuleHighlight
                                    module={module}
                                    onClick={() => onClickEditTest(module)}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Modal active={modalActive} setActive={setModalActive}>
                <div>Модуль сохранен успешно!</div>
            </Modal>
        </div>
    )
}

export default CourseModules;