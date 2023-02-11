import SearchHeaderOptions from "./SearchHeaderOptions";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function SearchHeader() {
  return (
    <>
    <DesktopNav />
    <MobileNav/>
    <SearchHeaderOptions/>
    </>
  );
}
