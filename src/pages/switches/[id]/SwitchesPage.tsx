import { useParams } from "react-router-dom";

const SwitchesPage = () => {
  const { id } = useParams();
  return <div>Keyboard {id}</div>;
};
export default SwitchesPage;
