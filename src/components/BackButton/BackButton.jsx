import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // 🔙 Всегда возвращает на главную страницу
  };

  return <button onClick={handleGoBack}>Назад</button>;
}

export default BackButton;
