import { changeTitle } from "../utils";

const NotFound = () => {

  changeTitle('Not found')

  return (
    <div className="app-notFound">
      <h1 className="notfound-title">404 ERROR!! NOT FOUND</h1>
    </div>
  );
};

export default NotFound;