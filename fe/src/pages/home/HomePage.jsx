import BannerSidebar from "../../components/common/section/BannerSidebar";
import CategorySidebar from "../../components/common/section/CategorySidebar";
import HotProductsSection from "../../components/common/section/HotProductSection";
import SteamGameSection from "../../components/common/section/SteamGameSection";
import StudySection from "../../components/common/section/StudySection";

const HomePage = () => {
  return (
    <>
      {/* Sidebar */}
      <section className="mx-auto px-4 py-6 grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <CategorySidebar />
        </div>
        <div className="col-span-10">
          <BannerSidebar />
        </div>
      </section>
      <section className="mx-auto px-4 py-6">
        <HotProductsSection />
      </section>
      <section className="mx-auto px-4 py-6">
        <SteamGameSection />
      </section>
      <section className="mx-auto px-4 py-6">
        <StudySection />
      </section>
    </>
  );
};

export default HomePage;
