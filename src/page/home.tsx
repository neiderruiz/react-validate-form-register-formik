import { useNavigate } from "react-router-dom"
import Button from "../components/button"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="space-y-2">
                <Button
                    text="Iniciar Sesión"
                    type="button"
                    onClick={() => navigate('/login')}
                />
                <Button
                    text="Registrarme"
                    type="button"
                    onClick={() => navigate('/register')}
                />
            </div>

        </div>
    )
}

export default Home