
function Footer() {
  return (
    <div className="footer">
        <div className="credits">
            <p className="credit-text credit-text1">A Lasse Fierz Production</p>
            <p className="credit-text credit-text2">An Oberortweg 6 Design</p>
            <p className="credit-text credit-text3">Text 3</p>
        </div>
        <div className="sm">
            <a className="insta sm-icons" href="https://www.instagram.com/el__chele__/"><i className="fa-brands fa-instagram"></i></a>
            <a className="github sm-icons" href="https://github.com/Sp0och/full_stack_app"><i className="fa-brands fa-github"></i></a>
            <a className="linkedin sm-icons" href="https://www.linkedin.com/in/lasse-fierz-96197715b/"><i className="fa-brands fa-linkedin"></i></a>
            <a className="list sm-icons" href="/list"><i className="fa-solid fa-list"></i></a>
        </div>
    </div>
  )
}

export default Footer