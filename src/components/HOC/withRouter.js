import {useParams} from 'react-router-dom';
import React from 'react';

const withRouter = (Component) => {
    const ComponentWithRouterProps = (props) => {
        const params = useParams();
        return <Component {...props} params={params}/>
    }

    return ComponentWithRouterProps;
}

export default withRouter;