import ManCleaningKitchen from "../../assets/images/man-kitchen-cleaning.jpeg"
import Layout from "../../layouts/Layout.jsx"

export default function AboutUs() {
  return <Layout>
    <main className="flex items-start justify-between gap-[5px] p-[20px]">
      <div className="flex flex-col items-start gap-0 p-[50px] w-1/2 mt-[100px]">
        <p className="text-normal text-black font-bold my-[16px]">About Us</p>
        <h2 className="hedAbout text-black text-5xl font-semibold">
          Let us take care of all your cleaning service needs.
        </h2>

        <p className="my-[24px] text-2xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae
          erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
          vitae erat.Lo
        </p>

        <button
          className="text-white bg-black text-lg font-light rounded-md p-[18px] mt-[30px]"
        >Request a quote</button>
      </div>

      <div className="w-1/2 text-right p-[50px]">
        <img src={ManCleaningKitchen} alt="Cleaning Man"
             className="w-full h-[720px] object-cover rounded-sm scale-x-[-1]"
        />
      </div>
    </main>
  </Layout>
}