import Btn from "./btn";

export default function Pagination(){
    return (
        <ul className="w-full flex items-center justify-center mt-4">
            <li className="ml-2 last:ml-0">
                <Btn icon="icon-right" square size="xs" rounded color="dim" variant="lightness"></Btn>
            </li>
            <li className="ml-2 last:ml-0">
                <Btn square size="xs" rounded color="primary" variant="lightness">
                    1
                </Btn>
            </li>
            <li className="ml-2 last:ml-0">
                <Btn square size="xs" rounded color="primary">
                    2
                </Btn>
            </li>
            <li className="ml-2 last:ml-0">
                <Btn square size="xs" rounded color="primary" variant="lightness">
                    3
                </Btn>
            </li>
            <li className="ml-2 last:ml-0">
                <Btn icon="icon-left" square size="xs" rounded color="dim" variant="lightness"></Btn>
            </li>
        </ul>
    )
}