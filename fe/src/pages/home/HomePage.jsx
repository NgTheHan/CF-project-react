import BannerSidebar from "../../components/common/section/BannerSidebar";
import CategorySidebar from "../../components/common/section/CategorySidebar";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <div className="col-span-2">
          <CategorySidebar />
        </div>

        <div className="col-span-10">
          <BannerSidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
