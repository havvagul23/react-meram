import "./FooterApp.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
            <div className="text">
                <h1>Meram Belediyesi</h1>
                <p>Bizim Meram İçin Çalısıyoruz</p>
            </div>
            <div>
              <a href="https://www.facebook.com/merambelediyesi"> <i className="fa-brands fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/merambelediyesi"> <i className="fa-brands fa-instagram-square"></i></a>
              <a href="https://twitter.com/merambelediyesi"> <i className="fa-brands fa-twitter-square"></i></a>
              <a href="https://github.com/merambelediyesi"> <i className="fa-brands fa-github-square"></i></a>
            </div>
        </div>
        </div>
    )
}

export default Footer