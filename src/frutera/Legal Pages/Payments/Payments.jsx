import "./Payments.scss"

//გადახდის დაცული სერვისი
// 3D დაცვის სისტემა “Verified by VISA, MasterCard Secure Code“ და დამატებითი ავთენტიფიკაციის სერვისი მომსახურების უსაფრთხოების უზრუნველსაყოფად;
// არასანქცირებული ტრანზაქციების ძალზე მცირე რისკი და ავტორიზებული ტრანზაქციების შემთხვევაში მომსახურებისა თუ პროდუქტის საფასურის გარანტირებული გადახდა

export default function Payments() {
   return (
      <>
         <div className="MainTextContainer">
            <div className="MainTextContainer2">
               <div className="MainTextTitle">
                  <h1>გადახდის დაცული სერვისი</h1>
               </div>
               <br/>
               <div className="MainTextText1">
                  <p>
                     3D დაცვის სისტემა “Verified by VISA, MasterCard Secure Code“ და დამატებითი ავთენტიფიკაციის სერვისი მომსახურების უსაფრთხოების უზრუნველსაყოფად;
                     არასანქცირებული ტრანზაქციების ძალზე მცირე რისკი და ავტორიზებული ტრანზაქციების შემთხვევაში მომსახურებისა თუ პროდუქტის საფასურის გარანტირებული გადახდა
                 </p>
               </div>
            </div>
         </div>
      </>
   )
}