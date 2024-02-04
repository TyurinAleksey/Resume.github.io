import "./style.scss"
function App() {
  return (
    <div className="App">
        <div className="center">
            <div className="top">
                <div className="top__left"></div>
                <div className="top__right">
                    <div className="top__title">
                        <div className="top__name">Тюрин Алексей</div>
                        <div className="top__profession">Frontend-разработчик</div>
                    </div>
                    <div className="top__description">
                        <div className="top__subtitle">
                            <div className="icon">
                                <div className="icon__line"></div>
                                <div className="icon__boll"></div>
                                <div className="icon__miniBoll"></div>
                            </div>
                            <div className="top__prof-name">Обо мне:</div>
                        </div>
                        <p>
                            Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2019 года. Наработал более 5 000 часов в создании сайтов различной сложности.
                        </p>
                    </div>
                </div>
            </div>
            <div className="block"></div>
            <div className="main">
                <div className="main__left">
                    <div className="main__experience">
                        <div className="main__title-block">
                            <div className="icon">
                                <div className="icon__line"></div>
                                <div className="icon__boll"></div>
                                <div className="icon__miniBoll"></div>
                            </div>
                            <div className="main__title">
                                Трудовой опыт
                            </div>
                        </div>
                        <div className="main__job">Frontend-разработчик, ВВГУ, Владивосток</div>
                        <div className="main__date">Сентябрь 2023 - Январь 2024</div>
                        <div className="main__description">
                            Разрабатывал сайт для учебного заведения ВВГУ "Трекер карьеры". Был ведущим Frontend-разработчиком, под моим руководстом работало 3 человека.
                        </div>
                    </div>
                    <div className="main__education">
                        <div className="main__title-block">
                            <div className="icon">
                                <div className="icon__line"></div>
                                <div className="icon__boll"></div>
                                <div className="icon__miniBoll"></div>
                            </div>
                            <div className="main__title">
                                Обучение
                            </div>
                        </div>
                        <div className="main__job">Web и мультимедийная разработка, IThub college ВВГУ, Владивосток</div>
                        <div className="main__date">Ноябрь 2023 - по настоящее время</div>
                        <div className="main__description">
                            До поступления уже увлекался программированием и верстал уже спокойно сайты, но именно поступление дало мне более глубокое осознание то чем я занимаюсь, окрыло много тонкостей программирования и помогло мне обрести очень хорошие знания.
                        </div>
                    </div>
                </div>
                <div className="main__right">
                    <div className="main__sidebar">
                        <div className="main__title-block">
                            <div className="icon">
                                <div className="icon__line"></div>
                                <div className="icon__boll"></div>
                                <div className="icon__miniBoll"></div>
                            </div>
                            <div className="main__sidebar_title">Скилы</div>
                        </div>
                        <div className="main__skills">
                            <div className="main__skills_name">HTML</div>
                            <div className="main__progressbar">
                                <div className="main__progress HTML"></div>
                            </div>
                            <div className="main__skills_name">CSS</div>
                            <div className="main__progressbar">
                                <div className="main__progress CSS"></div>
                            </div>
                            <div className="main__skills_name">SCSS/SASS</div>
                            <div className="main__progressbar">
                                <div className="main__progress SCSS"></div>
                            </div>
                            <div className="main__skills_name">JavaScript</div>
                            <div className="main__progressbar">
                                <div className="main__progress JS"></div>
                            </div>
                            <div className="main__skills_name">React</div>
                            <div className="main__progressbar">
                                <div className="main__progress REACT"></div>
                            </div>
                            <div className="main__skills_name">Git</div>
                            <div className="main__progressbar">
                                <div className="main__progress GIT"></div>
                            </div>
                            <div className="main__skills_name">XML</div>
                            <div className="main__progressbar">
                                <div className="main__progress XML"></div>
                            </div>
                            <div className="main__skills_name">Python</div>
                            <div className="main__progressbar">
                                <div className="main__progress PY"></div>
                            </div>
                            <div className="main__skills_name">TypeScript</div>
                            <div className="main__progressbar">
                                <div className="main__progress TS"></div>
                            </div>
                            <div className="main__skills_name">PostgerSQL</div>
                            <div className="main__progressbar">
                                <div className="main__progress PSQL"></div>
                            </div>
                            <div className="main__skills_name">MySQL</div>
                            <div className="main__progressbar">
                                <div className="main__progress MSQL"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer__block">
                    <div className="footer__detalis">
                        <div className="footer__title">Адрес</div>
                        <div className="footer__body">г. Владивосток, ул. Державина 57</div>
                    </div>
                    <div className="footer__date">
                        <div className="footer__title">Дата рождения</div>
                        <div className="footer__body">10.09.2003</div>
                    </div>
                </div>
                <div className="footer__block">
                    <div className="footer__detalis">
                        <div className="footer__title">Номер</div>
                        <div className="footer__body">+79143835943</div>
                    </div>
                    <div className="footer__date">
                        <div className="footer__title">E-mail</div>
                        <div className="footer__body">alaxche@gmail.com</div>
                    </div>
                </div>
                <div className="footer__qr"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
