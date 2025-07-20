import Btn from "@/components/generic/btn";
import Heading from "@/components/generic/heading";

export default function UiBtns() {
  const text = "ثبت و ادامه";
  const colors = ["primary" , "success" , "warning" , "danger", "info", "neutral-light","dim"];
  return (
    <div>
      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          normal
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item}>{text}</Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          width icon in right
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} icon="icon-right-arrow">
                {text}
              </Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          width icon in left
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} icon="icon-left-arrow" iconPlace="left">
                {text}
              </Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          disabled
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} disabled>
                {text}
              </Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          loading
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} loading>
                {text}
              </Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          lightness
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} variant="lightness">
                {text}
              </Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          outline
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} variant="outline">
                {text}
              </Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          outline & lightness
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} variant="outline-lightness">
                {text}
              </Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          text
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} variant="text">
                {text}
              </Btn>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          square
        </Heading>
        <div className="-m-2 flex flex-wrap">
          {colors.map((item, index) => (
            <div className="p-2" key={index}>
              <Btn color={item} square icon="icon-info-circle" />
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-8">
        <Heading variant="h4" className="mb-2">
          gradient
        </Heading>
        <div className="-m-2 flex flex-wrap">
              <Btn color="primary" variant="gradient" icon="icon-info-circle">
                {text}
              </Btn>
        </div>
      </div>
    </div>
  );
}
