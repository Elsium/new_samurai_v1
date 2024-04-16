import {useNavigate, useParams} from 'react-router-dom';
import React from 'react';

const withRouter = (Component) => {
    const ComponentWithRouterProps = (props) => {
        const params = useParams();
        const history = useNavigate();
        return <Component {...props} params={params} history={history}/>
    }

    return ComponentWithRouterProps;
}

export default withRouter;