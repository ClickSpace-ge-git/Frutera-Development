import "./LoadingPage.scss"

export default function LoadingPage() {
   return (
      <>
         <div className="LoadingPageContainer">
               <div className="logoWithName">
                  <img className='logo' src={require('../../images/Frutera/logo.png')} alt="logo" />
                  <h1 className="LoadingPageText">Loading...</h1>
               </div>
         </div>
      </>
   )
}