import "./Titulo.css";

const Titulo = () => {
  return (
      <>
        <h1 className="changing-text">
            Fly me to&nbsp;
            <div className="texts-container">
                <span>
                        the Moon<br/>
                        Japón<br/>
                        España<br/>
                        Canadá
                        
                </span>
            </div>
        </h1>
    </>
  );
};

export default Titulo;