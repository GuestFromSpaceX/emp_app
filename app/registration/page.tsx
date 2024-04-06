import './page.css';

export default function Registration() {
    return (
    <>
    <body>
    <div className="wrapper">
        <div className="main">
            <div className="registration">
                <h1 className="registration__title">Регистрация</h1>
                <form className="registration__form">
                    <div className="registration__input-name-block">
                        <input type="text" className="registration__input-name" placeholder="Имя"/>
                    </div>
                    <div className="registration__input-email-block">
                        <input type="text" className="registration__input-email" placeholder="Email"/>
                    </div>
                    <div className="registration__input-code-block">
                        <input type="text" className="registration__input-code" placeholder="Код"/>
                    </div>
                </form>
                <button className="registration__button">Зарегистрироваться</button>
                <button className="registration__button-have-account">Уже есть аккаунт</button>
            </div>
        </div>
    </div>
</body>
    </>    
    ) }