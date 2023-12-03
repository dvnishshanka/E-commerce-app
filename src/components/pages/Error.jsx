import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited cannot be found."
        extra={
          <Button type="primary">
            <Link to="/">Back Home</Link>
          </Button>
        }
      />
    </main>
  );
};

export default Error;
