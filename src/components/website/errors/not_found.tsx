import CommonError from "./common_template";

function NotFound404() {
    return (<CommonError message="The requested resource was not found." />)
}

export default NotFound404;
