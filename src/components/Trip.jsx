import "./TripApp.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1>Haberler</h1>
      <p>Meram Belediyesi Haberleri</p>
      <div className="tripcard">
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/1-7_148.jpg"}
            heading="Meram'da Şivlilik Coskusu"
            text="Şivlilik geleneği Meram’da coşkuyla yaşandı. Sabahın erken saatlerinde sokaklara çıkan çocukların heyecanı ve mutluluğuna ortak olan Meram Belediye Başkanı Mustafa Kavuş, şivlilik toplayan çocuklara eşlik etti. Bu özel günü hastanede geçirmek zorunda kalan çocukları da unutmayan Kavuş, Meram Tıp Fakültesi’nde tedavi gören çocuklara hediyelerini hastane yönetimi ile birlikte verdi. Dolu dolu geçen günün sonunda DOSD Meram’da eğitim gören down sendromlu bireyler Başkan Kavuş’u ziyaret ederek şivlilik manisini okudu."
         />
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/1_323.jpg"}
            heading="20232ün En Gözdesi; Kızlar Kayası"
            text="Meram Belediyesi tarafından oluşturulan ‘Yeni Turizm Rotası’nın en nadide parçası Kızlar Kayası, 2023’ün en gözde mekanlarından biri oldu. Kızlar Kayası’nı kısa zamanda on binlerce kişinin ziyaret ettiğini söyleyen Meram Belediye Başkanı Mustafa Kavuş, “Kızlar Kayası, pek çok hikayeye konu oldu. Ama artık hemşehrilerimiz kendi hikayelerini yazacak dedik, öyle de oldu” diye konuştu."
         />
         <TripData 
            image={"	https://www.meram.bel.tr/upload/medya/1-9_60.jpg"}
            heading=" 'Nerede Bu Meram Bağları?' Sorusu, Meram Belediyesi'nin Projesiyle Cevap Buluyor"
            text="Tarihi Meram’ı yeniden canlandırma projesi olan Meram Bağı’nda yazlık çay bahçesi hizmet vermeye başladı. Meram Belediye Başkanı Mustafa Kavuş, İlçenin yeşil dokusuna, sosyal hayatına ve turizmine katkı sunacak Meram Bağı projedinin tamamının da yakın zamanda faaliyete geçeceğinin müjdesini verdi."
         />
       </div>
    </div>
  );
}

export default Trip;