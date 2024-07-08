import { PatternBannerCard, ITSupportForm, NewsSection } from "@/components";
import { SupportData } from "@/constDatas/SupportData";
import { notFound } from "next/navigation";
import Image from "next/image";

const SupportPage = ({ params }) => {
  const { slug } = params;
  const item = SupportData.find((item) => slug === item.slug);

  if (!item) {
    notFound();
  }

  const {
    title,
    icon,
    image,
    ctaTitle,
    ctaButtonTitle,
    ctaRedirect,
    emailTitle,
    email,
    phoneTitle,
    phone,
    description,
    richText,
  } = item;

  return (
    <>
      <PatternBannerCard title={title} />

      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="container px-5 mx-auto grid grid-cols-1 gap-6 lg:grid-cols-7  relative">
          <article className="lg:col-span-5">
            <Image
              src={image}
              width={800}
              height={600}
              alt={title}
              className="w-full aspect-[3/1.5] rounded-md object-cover"
            />

            <div
              className="rich-text-container"
              dangerouslySetInnerHTML={{ __html: richText }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {ctaTitle && (
                <div className="bg-primary-orange py-4 px-6 rounded-md font-semibold hover:-translate-y-2 hover:scale-105 transition-all">
                  <a target="_blank" href={ctaRedirect}>
                    <p className="capitalize font-bold">{ctaTitle}</p>
                    <div className="flex items-center gap-2 font-semibold rounded-md ">
                      <i className="fi fi-rr-calendar flex"></i>
                      <span>{ctaButtonTitle}</span>
                    </div>
                  </a>
                </div>
              )}

              {emailTitle && (
                <div className="outline outline-primary-orange py-4 px-6 rounded-md font-semibold hover:-translate-y-2 hover:scale-105 transition-all">
                  <a href={`mailto:${email}`}>
                    <p className="capitalize font-bold">{emailTitle}</p>
                    <div className="flex items-center gap-2  font-semibold rounded-md ">
                      <i className="fi fi-rr-envelope flex"></i>{" "}
                      <span>{email}</span>
                    </div>
                  </a>
                </div>
              )}

              {phoneTitle && (
                <div className="bg-primary-orange py-4 px-6 rounded-md font-semibold hover:-translate-y-2 hover:scale-105 transition-all">
                  <a href={`mailto:${phone}`}>
                    <p className="capitalize font-bold">{phoneTitle}</p>
                    <div className="flex items-center gap-2 rounded-md ">
                      <i className="fi fi-rr-phone-call flex"></i>{" "}
                      <span>{phone}</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {slug === "student-it-support" && (
              <div className=" mt-[48px]">
                <h2 className="capitalize font-bold text-xl  mb-3">
                  Fill up this form for Other IT related queries
                </h2>
                <ITSupportForm />
              </div>
            )}
          </article>

          <aside className="lg:col-span-2 w-full h-fit sticky top-28 left-0 flex flex-col gap-10">
            <div className="flex flex-col gap-5 bg-neutral-50 p-4 shadow rounded-md">
              <h4 className="text-xl font-bold highlight">Other Support</h4>
              <div className="flex flex-col gap-4">
                {SupportData?.map((item, index) => {
                  if (slug != item.slug)
                    return (
                      <a
                        key={index}
                        href={`/support/${item.slug}`}
                        className="w-full"
                      >
                        <div className="p-2 rounded-md hover:shadow transition-all">
                          <h3 className="font-semibold line-clamp-3">
                            {item?.title}
                          </h3>
                        </div>
                      </a>
                    );
                })}
              </div>
            </div>
          </aside>
        </div>

        <NewsSection />
      </div>
    </>
  );
};

export default SupportPage;
