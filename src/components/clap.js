import React from 'react';
import ClapButton from 'react-clap-button';

export default () => {

    const onCountChange = ({ count, countTotal });
    return (
        <ClapButton
            count={0}
            countTotal={0}
            maxCount={50}
            isClicked={false}
            onCountChange={onCountChange}
            iconComponent={props => <CustomIcon {...props} size={38} /> }
        />
    );
}