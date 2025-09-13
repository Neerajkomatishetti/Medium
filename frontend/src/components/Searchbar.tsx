import { Input } from "@/components/ui/input"

export default function SearchBar() {
  return (
    <div className="relative w-80 ">
      <Input
        id="searchbar"
        type="text"
        placeholder="Search"
        className="pl-12 pr-4 py-2 border-0 bg-secondary rounded-full"
      />
    </div>
  )
}

