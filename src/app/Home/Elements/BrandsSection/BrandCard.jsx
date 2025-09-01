import Image from "next/image";

export default function BrandCard({ brand }) {
    return <>
    <div>
        <Image width={1000} height={1000} quality={100} src={brand.image} alt="" />
    </div>
    </>;
}
