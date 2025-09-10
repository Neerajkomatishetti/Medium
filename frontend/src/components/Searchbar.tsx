import { Input } from "@/components/ui/input"

export default function SearchBarWithIcon() {
  return (
    <div className="relative w-80 ">
      <Input
        type="text"
        placeholder="Search"
        className="pl-12 pr-4 py-2 rounded-full"
      />
    </div>
  )
}

