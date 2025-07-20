import Btn from "@/components/generic/btn"
import Heading from "@/components/generic/heading"
import Chip from "../generic/chip"

export default function UiChips() {
    const text = 'متن تست'
    const colors = ["info", "success", "warning", "danger", "primary", "neutral-light"]
    return (
        <div>
            <div className="container pb-8 last:pb-0">
                <div className="-m-2 flex flex-wrap">
                    {
                        colors.map((item, index) => (
                            <div className="p-2" key={index}>
                                <Chip color={item} icon='icon-left-arrow'>
                                    {text}
                                </Chip>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container pb-8 last:pb-0">
                <div className="-m-2 flex flex-wrap">
                    {
                        colors.map((item, index) => (
                            <div className="p-2" key={index}>
                                <Chip variant="lightness" color={item} icon='icon-left-arrow' >
                                    {text}
                                </Chip>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container pb-8 last:pb-0">
                <div className="-m-2 flex flex-wrap">
                    {
                        colors.map((item, index) => (
                            <div className="p-2" key={index}>
                                <Chip variant="outline" color={item} icon='icon-left-arrow' >
                                    {text}
                                </Chip>
                            </div>
                        ))
                    }
                </div>
            </div>          
        </div>
    )
}