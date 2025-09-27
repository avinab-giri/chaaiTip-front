import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const GetStartSection = () => {
    return (
        <section id="getStart">
            <div className="container">
                <div className="content grid  grid-cols-12 mx-auto">
                    <div className="col-span-8 col-start-3 rounded-md py-15 flex items-center gap-8 bg-white mainCon z-10 px-10 border border-gray-100 shadow-md">
                        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                            <Avatar>
                                <AvatarImage src="/img/person-1.jpg" alt="@shadcn" />
                                <AvatarFallback>person1</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="/img/person-2.jpg" alt="@leerob" />
                                <AvatarFallback>person2</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage
                                    src="/img/person-3.jpg"
                                    alt="@person3"
                                />
                                <AvatarFallback>person3</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage
                                    src="/img/person-4.jpg"
                                    alt="@person4"
                                />
                                <AvatarFallback>person4</AvatarFallback>
                            </Avatar>
                        </div>
                        <h2>5000+ creators are already earning with ChaaiTip. <a href="" className="text-[var(--color-primary-800)] hover:text-[var(--color-primary-900)] transition">Get started today!</a></h2></div>
                </div>
            </div>
        </section>
    )
}

export default GetStartSection