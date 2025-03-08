import Btn from "@/components/generic/btn"
import Heading from "@/components/generic/heading"

export default function UiBtns() {
    const text = 'ثبت و ادامه'
    const colors = ["primary" , "secondary" , "info", "success", "warning", "danger" , "dim"]
    return (
        <div>
            <div className="container pb-8 last:pb-0">
                <div className="-m-2 flex flex-wrap">
                

                    {
                        colors.map((item, index) => (
                            <div className="p-2" key={index}>
                                <Btn color={item} >
                                    {text}
                                </Btn>
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
                                <Btn color={item} icon="icon-right-arrow" >
                                    {text}
                                </Btn>
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
                                <Btn color={item} icon="icon-left-arrow" iconPlace="left">
                                    {text}
                                </Btn>
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
                                <Btn color={item} disabled>
                                    {text}
                                </Btn>
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
                                <Btn color={item} loading>
                                    {text}
                                </Btn>
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
                                <Btn color={item} variant="lightness">
                                    {text}
                                </Btn>
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
                                <Btn color={item} variant="outline">
                                    {text}
                                </Btn>
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
                                <Btn color={item} variant="outline-lightness">
                                    {text}
                                </Btn>
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
                                <Btn color={item} variant="text">
                                    {text}
                                </Btn>
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
                                <Btn color={item} square icon="icon-info-circle"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}