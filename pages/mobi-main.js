
import SimpleNavbar from "../components/common/Navbar/SimpleNavbar";
import DarkWithIllustration from "../components/sections/Hero/DarkWithIllustration";
import WithLargeScreenshot from "../components/sections/Feature/WithLargeScreenshot";
import GridWithOffseetIcons from "../components/sections/Feature/GridWithOffseetIcons";
import WithOverlappingImage from "../components/sections/Testimonial/WithOverlappingImage";
import SplitWithImage from "../components/sections/CTA/SplitWithImage";
import CardsWith3column from "../components/sections/Blog/CardsWith3column";
import MissonWith4Column from "../components/sections/Footer/MissonWith4Column";


export default function Example() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <SimpleNavbar />
                <main>
                    <DarkWithIllustration />
                    {/* Feature section with screenshot */}
                    <WithLargeScreenshot />
                    {/* Feature section with grid */}
                    <GridWithOffseetIcons />
                    {/* Testimonial section */}
                    <WithOverlappingImage />
                    {/* Blog section */}
                    <CardsWith3column />
                    {/* CTA Section */}
                    <SplitWithImage />
                </main>
                <MissonWith4Column />
            </div>
        </div>
    )
}
