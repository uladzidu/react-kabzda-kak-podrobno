import React, {Dispatch, SetStateAction, useMemo} from 'react';

type TestFileType = {
    value : number
    setValue : Dispatch<SetStateAction<number>>
}

export const TestFile2 = (props : TestFileType) => {

    const onClickHandler = () => {
        props.setValue(props.value + 1)
    }
    console.log('TestFile2')
    return (
        <div onClick={onClickHandler}>
            {+props.value}
        </div>
    );
};

export let TestFile = React.memo(TestFile2)


