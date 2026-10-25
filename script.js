let isPremiumUser = false;
let currentCategoryKey = 'age1';
let currentActiveStory = null;
let currentEBookPageIndex = 0;

const themeConfig = {
    age1: {
        primary: "pink",
        badgeBg: "bg-pink-100",
        badgeText: "text-pink-700",
        mainText: "text-pink-600",
        subText: "text-pink-700",
        border: "border-pink-300",
        borderLight: "border-pink-100",
        dashed: "border-pink-300",
        boxBg: "bg-pink-50",
        innerBg: "bg-pink-100",
        btnBg: "bg-pink-500 hover:bg-pink-600",
        btnLightBg: "bg-pink-100 hover:bg-pink-200 text-pink-700",
        gradient: "from-pink-100 to-amber-100"
    },
    age2: {
        primary: "emerald",
        badgeBg: "bg-emerald-100",
        badgeText: "text-emerald-700",
        mainText: "text-emerald-600",
        subText: "text-emerald-700",
        border: "border-emerald-300",
        borderLight: "border-emerald-100",
        dashed: "border-emerald-300",
        boxBg: "bg-emerald-50",
        innerBg: "bg-emerald-100",
        btnBg: "bg-emerald-500 hover:bg-emerald-600",
        btnLightBg: "bg-emerald-100 hover:bg-emerald-200 text-emerald-700",
        gradient: "from-emerald-100 to-amber-100"
    },
    age3: {
        primary: "indigo",
        badgeBg: "bg-indigo-100",
        badgeText: "text-indigo-700",
        mainText: "text-indigo-600",
        subText: "text-indigo-700",
        border: "border-indigo-300",
        borderLight: "border-indigo-100",
        dashed: "border-indigo-300",
        boxBg: "bg-indigo-50",
        innerBg: "bg-indigo-100",
        btnBg: "bg-indigo-500 hover:bg-indigo-600",
        btnLightBg: "bg-indigo-100 hover:bg-indigo-200 text-indigo-700",
        gradient: "from-indigo-100 to-amber-100"
    }
};

const categoriesData = {
    age1: [
        {
            id: 1,
            name: "ลูกหมีเล่นซ่อนหา",
            type: "นิทานภาพและนิทานคำกลอน",
            age: "อายุ 1 ถึง 3 ขวบ",
            promote: "กระตุ้นประสาทสัมผัส ส่งเสริมการเรียนรู้คำศัพท์ การฟัง และการสังเกต",
            previewText: "ลูกหมีออกตามหาเพื่อนๆ ในป่า ใครจะซ่อนอยู่หลังต้นไม้กันนะ",
            coverImg: "ลูกหมีเล่นซ่อนหาปก.jpeg",
            previewImg: "ลูกหมีพรีวิว1.jpeg",
            pages: [
                { img: "ลูกหมีเล่นซ่อนหาปก.jpeg", heading: "ลูกหมีเล่นซ่อนหา", content: "นิทานภาพสำหรับเด็กเล็ก <span class='text-pink-600 text-2xl'>ส่งเสริมการสังเกต</span> และสร้างความสัมพันธ์" },
                { img: "หมี1.jpeg", heading: "เริ่มต้นเช้าวันใหม่", content: "เช้าวันหนึ่ง <span class='text-amber-600 text-xl'>ลูกหมี</span> ตื่นขึ้นมาอย่างสดใส<br><span class='text-pink-600 text-xl font-bold'>“วันนี้เราไปเล่นซ่อนหากันเถอะ!”</span>" },
                { img: "หมี2.jpeg", heading: "ที่ต้นไม้ใหญ่", content: "ลูกหมีเดินไปที่ต้นไม้ใหญ่<br><span class='text-pink-600 text-2xl font-bold'>“จ๊ะเอ๋! ใครอยู่ตรงนั้นนะ?”</span>" },
                { img: "หมี3.jpeg", heading: "กระต่ายน้อยแสนซน", content: "กระต่ายน้อยโผล่ออกมา<br><span class='text-emerald-600 text-2xl font-bold'>“จ๊ะเอ๋! ฉันเอง!”</span><br>ลูกหมีหัวเราะ <span class='text-amber-500 text-xl font-bold'>“ฮ่า ฮ่า ฮ่า”</span>" },
                { img: "หมี4.jpeg", heading: "ช้างน้อยใจดี", content: "ลูกหมีเดินต่อไปที่พุ่มไม้สีเขียว<br>“ก๊อก ก๊อก ใครซ่อนอยู่เอ่ย?”<br>ช้างน้อยยื่นงวงออกมา <span class='text-blue-500 text-xl font-bold'>“แปร๋น แปร๋น ฉันอยู่นี่!”</span>" },
                { img: "หมี5.jpeg", heading: "เพื่อนครบแล้ว", content: "ทุกตัวหัวเราะอย่างมีความสุข<br>ลูกหมีพูดว่า <span class='text-pink-600 text-xl font-bold'>“เย้! เจอเพื่อนครบแล้ว”</span><br>แล้วทุกตัวก็จับมือกันเล่นอย่างสนุกสนาน" },
                { img: "หมี6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การเล่นร่วมกันช่วยสร้างมิตรภาพและความสุข</strong></div>" }
            ]
        },
        {
            id: 2,
            name: "อาบน้ำกันเถอะ",
            type: "นิทานคำกลอน",
            age: "อายุ 0 ถึง 3 ขวบ",
            promote: "การฟังจังหวะคำคล้องจอง การเลียนเสียง และสุขนิสัย",
            previewText: "เป็ดน้อยเล่นฟองสบู่ระหว่างอาบน้ำ พร้อมเสียงสนุกๆ",
            coverImg: "อาบน้ำปก.jpeg",
            previewImg: "อาบน้ำ1.jpeg",
            pages: [
                { img: "อาบน้ำปก.jpeg", heading: "อาบน้ำกันเถอะ", content: "นิทานคำกลอน <span class='text-pink-600 text-2xl'>ส่งเสริมสุขอนามัย</span> และเสียงสนุกๆ" },
                { img: "อาบน้ำ2.jpeg", heading: "ถึงเวลาอาบน้ำ", content: "<span class='text-blue-600 text-xl font-bold'>ก๊าบ ก๊าบ ก๊าบ</span> เป็ดน้อยมา<br>ถึงเวลาอาบน้ำแล้ว<br>น้ำใสใส ไหลเป็นแถว<br>เป็ดน้อยแจ๋ว ยิ้มชื่นใจ" },
                { img: "อาบน้ำ3.jpeg", heading: "ฟองสบู่", content: "<span class='text-pink-600 text-xl font-bold'>ฟอง ฟอง ฟอง</span> ฟองสบู่<br>ล้างตัวหนู ให้สดใส<br>ถูแขนขา ถูเร็วไว<br>สะอาดได้ ทั้งตัวเลย" },
                { img: "อาบน้ำ4.jpeg", heading: "น้ำกระเด็น", content: "<span class='text-cyan-600 text-xl font-bold'>จ๋อม จ๋อม จ๋อม</span> น้ำกระเด็น<br>เป็ดน้อยเล่น อย่างร่าเริง<br>ล้างฟองออก ไม่ละเลย<br>เช็ดตัวเอ๋ย แห้งสบาย" },
                { img: "อาบน้ำ5.jpeg", heading: "สุขกายสบายใจ", content: "<span class='text-blue-600 text-xl font-bold'>ก๊าบ ก๊าบ ก๊าบ</span> เป็ดน้อยยิ้ม<br>แก้มอิ่มอิ่ม หอมสดใส<br>อาบน้ำเสร็จ สุขกายใจ<br>พร้อมวิ่งเล่น ในวันนี้" },
                { img: "อาบน้ำ6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การอาบน้ำช่วยดูแลความสะอาดของร่างกาย</strong></div>" }
            ]
        },
        {
            id: 3,
            name: "กินผักผลไม้ แข็งแรงจัง",
            type: "นิทานภาพ",
            age: "อายุ 1 ถึง 3 ขวบ",
            promote: "การรู้จักสี ชื่อผักผลไม้ และอาหารที่หลากหลาย",
            previewText: "กระต่ายน้อยชวนเพื่อนมารู้จักผักและผลไม้หลากสี",
            coverImg: "ผัก1.jpeg",
            previewImg: "ผัก2.jpeg",
            pages: [
                { img: "ผัก1.jpeg", heading: "กินผักผลไม้ แข็งแรงจัง", content: "นิทานภาพ <span class='text-emerald-600 text-2xl'>รู้จักสีและชื่อผักผลไม้</span>" },
                { img: "ผัก3.jpeg", heading: "วันนี้กินอะไรดี", content: "กระต่ายน้อยตื่นขึ้นมา<br><span class='text-pink-600 text-xl'>“วันนี้กินอะไรดีนะ?”</span><br>คุณแม่ยื่นแครอตสีส้มให้<br><span class='text-orange-500 text-xl font-bold'>“นี่คือแครอต สีส้มจ้ะ”</span><br>กระต่ายน้อยพูด <span class='text-orange-600 text-xl font-bold'>“ส้ม ส้ม ส้ม!”</span>" },
                { img: "ผัก4.jpeg", heading: "ผลไม้สีแดง", content: "กระต่ายน้อยเห็นแอปเปิลลูกใหญ่<br>“นี่อะไรนะ?”<br><span class='text-red-500 text-xl font-bold'>“แอปเปิลสีแดงจ้ะ”</span><br><span class='text-red-600 text-xl font-bold'>“แดง แดง แดง!”</span>" },
                { img: "ผัก5.jpeg", heading: "กล้วยและผักใบเขียว", content: "กระต่ายน้อยมองไปบนโต๊ะ <span class='text-yellow-500 text-xl font-bold'>“ว้าว! กล้วยสีเหลือง!”</span> (<span class='text-yellow-600 text-xl'>“เหลือง เหลือง เหลือง!”</span>)<br>คุณแม่ชี้ไปที่บรอกโคลี “แล้วนี่สีอะไรเอ่ย?” <span class='text-green-600 text-xl font-bold'>“สีเขียว!”</span>" },
                { img: "ผัก6.jpeg", heading: "อร่อยจังเลย", content: "กระต่ายน้อยยิ้มกว้าง <span class='text-pink-600 text-xl'>“ผักผลไม้มีหลายสี น่ากินจังเลย!”</span><br>คุณแม่เตรียมอาหารให้เหมาะกับวัย กระต่ายน้อยกินอย่างเอร็ดอร่อย <span class='text-amber-600 text-xl font-bold'>“อร่อยจังเลย!”</span>" },
                { img: "ผัก7.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การกินอาหารหลากหลายและเหมาะสมกับวัยช่วยให้ร่างกายเติบโตแข็งแรง</strong></div>" }
            ]
        },
        {
            id: 4,
            name: "ง่วงแล้วนะ เจ้าลิงน้อย",
            type: "นิทานภาพก่อนนอน",
            age: "อายุ 0 ถึง 3 ขวบ",
            promote: "การฟังเสียงนุ่มนวล การสร้างกิจวัตรก่อนนอน และความรู้สึกอบอุ่นปลอดภัย",
            previewText: "เจ้าลิงน้อยเล่นมาทั้งวัน ถึงเวลาบอกลาพระจันทร์แล้วเข้านอน",
            coverImg: "ลิง1.jpeg",
            pages: [
                { img: "ลิง2.jpeg", heading: "ง่วงแล้วนะ เจ้าลิงน้อย", content: "นิทานภาพก่อนนอน <span class='text-indigo-600 text-2xl'>สร้างกิจวัตรก่อนนอน</span>" },
                { img: "ลิง3.jpeg", heading: "พระอาทิตย์ลับขอบฟ้า", content: "พระอาทิตย์ค่อย ๆ ลับขอบฟ้า ท้องฟ้าเปลี่ยนเป็นสีม่วงอ่อน<br>เจ้าลิงน้อยหาว <span class='text-purple-600 text-xl font-bold'>“ฮ้าววว ง่วงจังเลย”</span><br>คุณแม่ลิงเดินเข้ามา <span class='text-pink-600 text-xl'>“ได้เวลาเข้านอนแล้วจ้ะ”</span>" },
                { img: "ลิง4.jpeg", heading: "เตรียมตัวเข้านอน", content: "เจ้าลิงน้อยไปอาบน้ำ แปรงฟันให้สะอาด<br>แล้วสวมชุดนอนตัวนุ่ม<br><span class='text-pink-500 text-xl font-bold'>“นุ่ม นุ่ม นุ่ม สบายจัง”</span>" },
                { img: "ลิง5.jpeg", heading: "ราตรีสวัสดิ์", content: "เจ้าลิงน้อยขึ้นเตียง กอดหมอนใบโปรด คุณแม่ห่มผ้าให้อย่างเบามือ <span class='text-pink-600 text-xl'>“ฝันดีนะ ลูกลิงน้อย”</span><br>เจ้าลิงน้อยมองพระจันทร์ <span class='text-indigo-500 text-xl'>“ราตรีสวัสดิ์ คุณพระจันทร์”</span> ดวงดาวระยิบระยับ <span class='text-amber-500 text-xl font-bold'>วิบ วิบ วิบ</span>" },
                { img: "ลิง6.jpeg", heading: "หลับสบาย", content: "เจ้าลิงน้อยหลับตา<br><span class='text-blue-500 text-2xl font-bold'>“ครอกฟี้ ครอกฟี้”</span><br>หลับสบายจนถึงเช้า" },
                { img: "ลิง7.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การมีกิจวัตรก่อนนอนอย่างสม่ำเสมอช่วยให้เด็กเตรียมตัวพักผ่อน</strong></div>" }
            ]
        },
        {
            id: 5,
            name: "สีสันรอบตัวของหนูน้อย",
            type: "นิทานภาพเรียนรู้สี",
            age: "อายุ 1 ถึง 3 ขวบ",
            promote: "การมองเห็น การแยกแยะสี การจดจำ และคำศัพท์พื้นฐาน",
            previewText: "ช้างน้อยพาเด็กๆ ออกเดินทางค้นหาสีสันรอบตัว",
            coverImg: "สี1.jpeg",
            previewImg: "สี2.jpeg",
            pages: [
                { img: "สี1.jpeg", heading: "สีสันรอบตัวของหนูน้อย", content: "นิทานภาพเรียนรู้สี <span class='text-purple-600 text-2xl'>แยกแยะสีและจดจำ</span>" },
                { img: "สี3.jpeg", heading: "โลกมีหลายสี", content: "เช้าวันสดใส ช้างน้อยออกเดินเล่น<br><span class='text-pink-600 text-xl font-bold'>“ว้าว! โลกของเรามีหลายสีจัง”</span><br>ช้างน้อยเห็นแอปเปิลบนโต๊ะ <span class='text-red-600 text-xl font-bold'>“สีแดง สีแดง แอปเปิลสีแดง!”</span>" },
                { img: "สี4.jpeg", heading: "สีเหลืองและสีฟ้า", content: "เดินต่อไปอีกนิด ช้างน้อยเห็นกล้วยหนึ่งหวี <span class='text-yellow-600 text-xl font-bold'>“สีเหลือง สีเหลือง กล้วยสีเหลือง!”</span><br>ช้างน้อยเงยหน้ามองท้องฟ้า <span class='text-blue-500 text-xl font-bold'>“สีฟ้า สีฟ้า ท้องฟ้าสีฟ้า!”</span>" },
                { img: "สี5.jpeg", heading: "ใบไม้และสายรุ้งแสนสวย", content: "ช้างน้อยเดินผ่านต้นไม้ใหญ่ <span class='text-green-600 text-xl font-bold'>“สีเขียว สีเขียว ใบไม้สีเขียว!”</span><br>ทันใดนั้น ฝนหยุดตก สายรุ้งปรากฏบนท้องฟ้า <span class='text-pink-600 text-xl font-bold'>“ว้าว! สายรุ้งมีหลายสี! แดง เหลือง ฟ้า เขียว!”</span>" },
                { img: "สี6.jpeg", heading: "สีสันสวยงาม", content: "ช้างน้อยชูงวงขึ้นอย่างดีใจ<br><span class='text-purple-600 text-2xl font-bold'>“สีสันรอบตัวสวยจังเลย!”</span><br>ช้างน้อยกลับบ้านพร้อมรอยยิ้ม" },
                { img: "สี7.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การสังเกตสิ่งรอบตัวช่วยส่งเสริมการเรียนรู้และความอยากรู้อยากเห็น</strong></div>" }
            ]
        }
    ],
    age2: [
        {
            id: 1,
            name: "กระต่ายน้อยกับเมฆแห่งความโกรธ",
            type: "นิทาน EQ และคุณธรรม",
            age: "อายุ 4 ถึง 6 ขวบ",
            promote: "เสริมสร้างจินตนาการ การจัดการอารมณ์ ความมั่นใจ ความรับผิดชอบ และการเห็นอกเห็นใจผู้อื่น",
            previewText: "เมื่อกระต่ายน้อยโกรธจนมีเมฆสีเทาลอยอยู่เหนือหัว เขาจะทำอย่างไรให้เมฆก้อนนั้นค่อย ๆ หายไป",
            coverImg: "ต่าย1.jpeg",
            previewImg: "ต่าย2.jpeg",
            pages: [
                { img: "ต่าย1.jpeg", heading: "กระต่ายน้อยกับเมฆแห่งความโกรธ", content: "นิทานอีคิว <span class='text-emerald-600 text-2xl'>การจัดการความโกรธ</span> ตัวละครหลักคือกระต่ายน้อยและเต่าน้อย" },
                { img: "ต่าย3.jpeg", heading: "ปราสาทบล็อกไม้พัง", content: "เช้าวันหนึ่ง กระต่ายน้อยกำลังสร้างปราสาทจากบล็อกไม้หลากสี <span class='text-emerald-600 text-xl'>“อีกนิดเดียวก็เสร็จแล้ว!”</span> กระต่ายน้อยพูดอย่างดีใจ<br>ทันใดนั้น เต่าน้อยเดินผ่านมาและเผลอชนปราสาทล้มลง โครม! บล็อกไม้กระจัดกระจายเต็มพื้น <span class='text-red-600 text-xl font-bold'>“ทำไมเธอไม่ระวังเลย!”</span> กระต่ายน้อยตะโกนด้วยความโกรธ" },
                { img: "ต่าย4.jpeg", heading: "เมฆสีเทาปรากฏ", content: "ทันใดนั้น เมฆสีเทาก้อนใหญ่ก็ปรากฏขึ้นเหนือหัวกระต่ายน้อย เมฆก้อนนั้นส่งเสียงครืน ๆ ราวกับฟ้าร้อง<br>เต่าน้อยตกใจและพูดเบา ๆ ว่า <span class='text-gray-600 text-xl'>“ขอโทษนะ ฉันไม่ได้ตั้งใจ”</span> แต่กระต่ายน้อยยังคงโกรธ จึงนั่งกอดอกและหันหน้าหนี" },
                { img: "ต่าย5.jpeg", heading: "คำแนะนำจากนกฮูก", content: "นกฮูกผู้ใจดีบินผ่านมาเห็นเหตุการณ์ <span class='text-emerald-600 text-xl'>“กระต่ายน้อย ตอนนี้หนูกำลังรู้สึกอะไรอยู่จ๊ะ?”</span><br><span class='text-red-500 text-xl font-bold'>“หนูโกรธมากเลย!”</span> กระต่ายน้อยตอบ<br>นกฮูกยิ้มและพูดว่า <span class='text-emerald-700 text-lg font-bold'>“ความโกรธเกิดขึ้นได้กับทุกคน แต่เราเลือกวิธีแสดงออกได้นะ”</span>" },
                { img: "ต่าย6.jpeg", heading: "ฝึกหายใจสงบใจ", content: "<span class='text-emerald-600 text-lg font-bold'>“ลองหายใจเข้าช้า ๆ แล้วผ่อนลมหายใจออก ทำสักสามครั้งสิจ๊ะ”</span><br>กระต่ายน้อยลองทำตาม หายใจเข้า...หนึ่ง หายใจออก...สอง หายใจเข้าและออกช้า ๆ อีกครั้ง เมฆสีเทาค่อย ๆ เล็กลง" },
                { img: "ต่าย7.jpeg", heading: "ท้องฟ้ากลับมาสดใส", content: "กระต่ายน้อยรู้สึกสงบขึ้น จึงหันไปหาเต่าน้อย <span class='text-emerald-600 text-lg'>“ฉันเสียใจที่ปราสาทพัง แต่ฉันจะไม่ตะโกนใส่เธอแล้ว”</span><br>เต่าน้อยยิ้ม <span class='text-emerald-600 text-lg font-bold'>“เรามาช่วยกันสร้างใหม่ไหม?”</span> ทั้งสองช่วยกันสร้างปราสาท เมฆสีเทาหายไป ท้องฟ้ากลับมาสดใสอีกครั้ง" },
                { img: "ต่าย8.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>ความโกรธเป็นอารมณ์ธรรมชาติ แต่เราสามารถฝึกสงบใจและพูดคุยกันด้วยเหตุผลได้</strong></div>" }
            ]
        },
        {
            id: 2,
            name: "สิงโตน้อยผู้กล้าพูดคำว่าขอโทษ",
            type: "นิทานคุณธรรม",
            age: "อายุ 4 ถึง 6 ขวบ",
            promote: "ความรับผิดชอบและการขอโทษ",
            previewText: "สิงโตน้อยทำของเล่นเพื่อนพังโดยไม่ได้ตั้งใจ แต่กลับไม่กล้าบอกความจริง",
            coverImg: "สิง1.jpeg",
            previewImg: "สิง2.jpeg",
            pages: [
                { img: "สิง1.jpeg", heading: "สิงโตน้อยผู้กล้าพูดคำว่าขอโทษ", content: "นิทานคุณธรรม <span class='text-emerald-600 text-2xl'>ความรับผิดชอบและการขอโทษ</span> ตัวละครหลักคือสิงโตน้อยและยีราฟน้อย" },
                { img: "สิง3.jpeg", heading: "รถของเล่นพัง", content: "ในป่าแสนสุข สิงโตน้อยกำลังเล่นกับเพื่อน ๆ ยีราฟน้อยนำรถของเล่นสีแดงคันโปรดมาให้ดู <span class='text-red-500 text-xl'>“รถคันนี้สวยจัง!”</span> สิงโตน้อยพูด <span class='text-emerald-600 text-xl'>“เธอลองเล่นได้ แต่ระวังหน่อยนะ”</span> ยีราฟบอก<br>สิงโตน้อยรับรถมาวิ่งเล่น <span class='text-amber-600 text-xl font-bold'>“บรื้น บรื้น!”</span> ทันใดนั้น รถหลุดจากมือ แกร๊ก! ล้อรถข้างหนึ่งหักออกมา สิงโตน้อยตกใจมาก <span class='text-red-600 text-xl font-bold'>“แย่แล้ว!”</span>" },
                { img: "สิง4.jpeg", heading: "สารภาพกับคุณแม่", content: "สิงโตน้อยรีบนำรถไปซ่อนไว้หลังพุ่มไม้ เมื่อยีราฟน้อยกลับมาถามหา สิงโตน้อยก้มหน้าไม่กล้าตอบ ตลอดทั้งวันสิงโตน้อยรู้สึกไม่สบายใจ ไม่สนุกกับการเล่นเหมือนเคย<br>คุณแม่สิงโตสังเกตเห็นจึงถาม <span class='text-emerald-600 text-xl'>“ลูกมีอะไรไม่สบายใจหรือเปล่า?”</span> สิงโตน้อยเล่าเรื่องทั้งหมดให้ฟัง" },
                { img: "สิง5.jpeg", heading: "พูดคำว่าขอโทษ", content: "คุณแม่พูดอย่างอ่อนโยน <span class='text-emerald-600 text-lg font-bold'>“การทำผิดพลาดเกิดขึ้นได้ แต่ความกล้าหาญคือการยอมรับความจริงและพยายามแก้ไข”</span><br>วันต่อมา สิงโตน้อยเดินไปหายีราฟน้อย <span class='text-emerald-600 text-lg font-bold'>“ฉันขอโทษนะ ฉันทำรถของเธอพังโดยไม่ได้ตั้งใจ”</span> ยีราฟน้อยดีใจที่สิงโตน้อยพูดความจริง" },
                { img: "สิง6.jpeg", heading: "รอยยิ้มและความสามัคคี", content: "สิงโตน้อยชวนยีราฟน้อยนำรถไปให้คุณลุงหมีช่วยซ่อม ไม่นานรถสีแดงก็กลับมาแล่นได้อีกครั้ง <span class='text-emerald-600 text-xl'>“ขอบใจที่ช่วยซ่อมนะ”</span> ยีราฟพูด<br>สิงโตน้อยยิ้มอย่างโล่งใจ <span class='text-emerald-600 text-lg font-bold'>“ต่อไปฉันจะระวังของของเพื่อนให้มากขึ้น!”</span>" },
                { img: "สิง7.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การยอมรับผิด ขอโทษอย่างจริงใจ และช่วยแก้ไขสิ่งที่ทำผิด เป็นความกล้าหาญที่น่าชื่นชม</strong></div>" }
            ]
        },
        {
            id: 3,
            name: "หมีน้อยแบ่งปันความสุข",
            type: "นิทานคุณธรรม",
            age: "อายุ 4 ถึง 6 ขวบ",
            promote: "ความมีน้ำใจและการแบ่งปัน",
            previewText: "หมีน้อยมีของเล่นมากมาย แต่ไม่ยอมแบ่งให้เพื่อน จนค้นพบว่าการเล่นด้วยกันสนุกกว่า",
            coverImg: "หมีแบ่ง1.jpeg",
            previewImg: "หมีแบ่ง2.jpeg",
            pages: [
                { img: "หมีแบ่ง1.jpeg", heading: "หมีน้อยแบ่งปันความสุข", content: "นิทานคุณธรรม <span class='text-emerald-600 text-2xl'>ความมีน้ำใจและการแบ่งปัน</span> ตัวละครคือหมีน้อย กระรอกน้อย และจิ้งจอกน้อย" },
                { img: "หมีแบ่ง3.jpeg", heading: "หวงของเล่น", content: "เช้าวันเสาร์ หมีน้อยได้รับกล่องของเล่นใหม่ มีลูกบอลสีรุ้ง รถของเล่น และบล็อกไม้ <span class='text-emerald-600 text-xl font-bold'>“ว้าว ของเล่นฉันสวยที่สุด!”</span> หมีน้อยนำไปเล่นที่สวน<br>กระรอกน้อยกับจิ้งจอกน้อยเดินมาขอเล่นด้วย หมีน้อยรีบกอดกล่องไว้ <span class='text-red-600 text-xl font-bold'>“ไม่ได้! นี่เป็นของเล่นของฉัน!”</span> เพื่อนทั้งสองจึงเดินไปเล่นที่อื่น" },
                { img: "หมีแบ่ง4.jpeg", heading: "ความรู้สึกเหงา", content: "หมีน้อยเล่นรถคนเดียว <span class='text-amber-600 text-xl'>“บรื้น บรื้น!”</span> ลองต่อตึกจากบล็อกไม้ แต่ไม่มีใครช่วย ไม่มีใครหัวเราะด้วย หมีน้อยเริ่มรู้สึกเหงา<br>มองไปเห็นเพื่อน ๆ วิ่งไล่จับกันอย่างมีความสุข คุณแม่หมีเดินมานั่งข้าง ๆ <span class='text-emerald-600 text-lg font-bold'>“บางครั้งความสุขก็เกิดจากการได้เล่นและแบ่งปันกับผู้อื่นนะลูก”</span>" },
                { img: "หมีแบ่ง5.jpeg", heading: "เล่นด้วยกันสนุกที่สุด", content: "หมีน้อยคิดอยู่ครู่หนึ่ง ก่อนจะถือกล่องของเล่นเดินไปหาเพื่อน <span class='text-emerald-600 text-lg'>“มากเล่นด้วยกันไหม?”</span> เพื่อนยิ้มกว้าง <span class='text-emerald-600 text-lg font-bold'>“ได้สิ!”</span><br>กระรอกน้อยช่วยต่อหอคอย จิ้งจอกน้อยนำรถมาวิ่งรอบปราสาท หมีน้อยกลิ้งลูกบอล ทุกตัวหัวเราะอย่างมีความสุข หมีน้อยพูดว่า <span class='text-emerald-600 text-xl font-bold'>“เล่นด้วยกันสนุกกว่าที่คิด!”</span>" },
                { img: "หมีแบ่ง6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การแบ่งปันและการเล่นร่วมกันช่วยสร้างมิตรภาพ แต่เราก็ควรเคารพของใช้และความรู้สึกของกันและกัน</strong></div>" }
            ]
        },
        {
            id: 4,
            name: "ลูกช้างน้อยกับดวงดาวแห่งความมั่นใจ",
            type: "นิทาน EQ",
            age: "อายุ 4 ถึง 6 ขวบ",
            promote: "ความมั่นใจและการเอาชนะความกลัว",
            previewText: "ช้างน้อยไม่กล้าแสดงความสามารถต่อหน้าเพื่อน จนได้พบดวงดาววิเศษที่สอนให้เชื่อมั่นในตัวเอง",
            coverImg: "ช้าง1.jpeg",
            previewImg: "ช้าง2.jpeg",
            pages: [
                { img: "ช้าง1.jpeg", heading: "ลูกช้างน้อยกับดวงดาวแห่งความมั่นใจ", content: "นิทานอีคิว <span class='text-emerald-600 text-2xl'>ความมั่นใจและการเอาชนะความกลัว</span> ตัวละครหลักคือช้างน้อยมะลิและนกน้อย" },
                { img: "ช้าง3.jpeg", heading: "ความกลัวบนเวที", content: "ในป่าแห่งดวงดาว ช้างน้อยชื่อ “มะลิ” ชอบร้องเพลงมากแต่ไม่เคยกล้าร้องให้ใครฟัง วันหนึ่ง คุณครูนกฮูกประกาศว่าจะมีงานแสดงความสามารถ<br>กระต่ายจะเต้นรำ ลิงจะเล่นดนตรี แต่มะลิอยากร้องเพลงแต่กลับพูดเบา ๆ ว่า <span class='text-red-500 text-lg'>“ฉันคงทำไม่ได้หรอก กลัวเพื่อนหัวเราะ”</span>" },
                { img: "ช้าง4.jpeg", heading: "แสงดาวแห่งความกล้า", content: "คืนนั้นมะลินั่งมองดวงดาว ดาวดวงเล็กสีทองเปล่งประกาย <span class='text-amber-500 text-lg'>“ทำไมเธอดูเศร้าจัง?”</span> มะลิเล่าให้ฟัง ดวงดาวยิ้ม <span class='text-emerald-600 text-lg font-bold'>“การกลัวไม่ใช่เรื่องผิด แต่เธอไม่จำเป็นต้องเก่งตั้งแต่ครั้งแรก เริ่มจากร้องให้เพื่อนสนิทฟังก่อนสิ”</span>" },
                { img: "ช้าง5.jpeg", heading: "เสียงเพลงแห่งความภูมิใจ", content: "วันรุ่งขึ้นมะลิชวนนกน้อยมาฟังเพลง <span class='text-emerald-600 text-xl'>“ลา ลา ลา...”</span> นกน้อยปรบปีก <span class='text-emerald-600 text-lg'>“เสียงเธอไพเราะจัง!”</span> มะลิเริ่มมั่นใจ<br>วันแสดงจริงมะลิขึ้นเวที หลับตา หายใจเข้าลึก ๆ แล้วเริ่มร้องเพลง <span class='text-emerald-600 text-xl font-bold'>“ลา ลา ลา...”</span> เพื่อน ๆ ตั้งใจฟังและปรบมือให้ด้วยความประทับใจ มะลิยิ้มกว้างด้วยความภูมิใจ" },
                { img: "ช้าง6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>ความมั่นใจเกิดจากการฝึกฝนและกล้าลองทำสิ่งใหม่ แม้จะยังรู้สึกกลัวอยู่ก็ตาม</strong></div>" }
            ]
        },
        {
            id: 5,
            name: "จิ้งจอกน้อยเรียนรู้หัวใจเพื่อน",
            type: "นิทาน EQ",
            age: "อายุ 4 ถึง 6 ขวบ",
            promote: "ความเห็นอกเห็นใจและการเข้าใจความรู้สึกผู้อื่น",
            previewText: "จิ้งจอกน้อยเห็นเพื่อนร้องไห้ แต่ไม่เข้าใจ จนได้เรียนรู้ว่าบางครั้งเพื่อนต้องการคนรับฟัง",
            coverImg: "จิ้งจอก1.jpeg",
            previewImg: "จิ้งจอก2.jpeg",
            pages: [
                { img: "จิ้งจอก1.jpeg", heading: "จิ้งจอกน้อยเรียนรู้หัวใจเพื่อน", content: "นิทานอีคิว <span class='text-emerald-600 text-2xl'>ความเห็นอกเห็นใจและการเข้าใจความรู้สึกผู้อื่น</span> ตัวละครคือจิ้งจอกน้อยและกระต่ายน้อย" },
                { img: "จิ้งจอก3.jpeg", heading: "กระต่ายน้อยเสียใจ", content: "ในสวนดอกไม้ จิ้งจอกน้อยวิ่งเล่นอย่างร่าเริง เห็นกระต่ายน้อยนั่งก้มหน้าน้ำตาคลอ จิ้งจอกน้อยชวนไปวิ่งเล่น แต่กระต่ายน้อยส่ายหน้า <span class='text-gray-500 text-lg'>“ไม่อยากเล่น”</span><br>จิ้งจอกน้อยแปลกใจ นกฮูกบินมาสอน <span class='text-emerald-600 text-lg font-bold'>“บางครั้งเพื่อนอาจกำลังเสียใจและยังไม่พร้อมเล่นนะ”</span>" },
                { img: "จิ้งจอก4.jpeg", heading: "รับฟังด้วยความเข้าใจ", content: "จิ้งจอกน้อยเดินกลับไปหา <span class='text-emerald-600 text-lg'>“เธอเป็นอะไรหรือเปล่า? ถ้าอยากเล่า ฉันพร้อมฟังนะ”</span><br>กระต่ายน้อยเงยหน้า <span class='text-red-500 text-lg'>“ตุ๊กตาตัวโปรดหายไป ฉันเสียใจมาก”</span> จิ้งจอกน้อยคิดว่าถ้าของตัวเองหายก็คงเสียใจเหมือนกัน จึงอาสาช่วยตามหา" },
                { img: "จิ้งจอก5.jpeg", heading: "รอยยิ้มกลับมาอีกครั้ง", content: "ทั้งสองช่วยกันหา จนจิ้งจอกน้อยเห็นตุ๊กตาวางอยู่บนม้านั่ง <span class='text-indigo-600 text-xl font-bold'>“เจอแล้ว!”</span> กระต่ายน้อยวิ่งไปกอด <span class='text-emerald-600 text-lg'>“ขอบใจมากนะ”</span><br>จิ้งจอกน้อยยิ้ม <span class='text-emerald-600 text-lg font-bold'>“ฉันดีใจที่เธอยิ้มได้”</span> ตั้งแต่นั้นมา จิ้งจอกน้อยก็เรียนรู้ที่จะสังเกตและรับฟังความรู้สึกของเพื่อน" },
                { img: "จิ้งจอก6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การเห็นอกเห็นใจ เริ่มต้นจากการรับฟังและเคารพความรู้สึกของผู้อื่น</strong></div>" }
            ]
        }
    ],
    age3: [
        {
            id: 1,
            name: "นักสำรวจน้อยกับป่ามหัศจรรย์",
            type: "นิทานผจญภัยและธรรมชาติ",
            age: "อายุ 7 ขวบขึ้นไป",
            promote: "ฝึกการคิดวิเคราะห์ การตั้งคำถาม การแก้ปัญหา และส่งเสริมนิสัยรักการอ่าน",
            previewText: "เด็กสองคนออกสำรวจป่าลึกลับ และพบว่าต้นไม้ใหญ่กำลังเหี่ยวเฉา พวกเขาต้องค้นหาสาเหตุเพื่อช่วยเหลือป่าแห่งนี้",
            coverImg: "สำรวจ1.jpeg",
            previewImg: "สำรวจ2.jpeg",
            pages: [
                { img: "สำรวจ1.jpeg", heading: "นักสำรวจน้อยกับป่ามหัศจรรย์", content: "นิทานผจญภัยและธรรมชาติ <span class='text-indigo-600 text-2xl'>ระบบนิเวศและความสัมพันธ์ของสิ่งมีชีวิต</span>" },
                { img: "สำรวจ3.jpeg", heading: "ต้นไม้ใหญ่เหี่ยวเฉา", content: "ในหมู่บ้านใกล้ภูเขา “ต้นกล้า” และ “ใบบัว” ชอบสำรวจธรรมชาติ คุณปู่มอบแผนที่ป่าให้ <span class='text-indigo-600 text-lg'>“ในป่ามีต้นไม้ใหญ่อายุนับร้อยปี แต่กำลังเหี่ยวเฉา ช่วยปู่ดูหน่อยนะว่าเกิดอะไรขึ้น”</span><br>ทั้งสองเตรียมสมุดบันทึก แว่นขยาย ก่อนเดินทางเข้าป่าพบผีเสื้อสีสวยบินอยู่เหนือดอกไม้ ใบบัวอธิบายว่าผีเสื้อช่วยพาละอองเรณู" },
                { img: "สำรวจ4.jpeg", heading: "สำรวจลำธาร", content: "ทั้งสองเดินมาถึงต้นไม้ใหญ่กลางป่า ใบไม้เปลี่ยนเป็นสีน้ำตาล พื้นดินแห้งแตก <span class='text-amber-600 text-lg font-bold'>“หรือว่าต้นไม้ขาดน้ำ?”</span> ใบบัวตั้งข้อสังเกต<br>ต้นกล้าสำรวจลำธาร พบกิ่งไม้และเศษขยะจำนวนมากกีดขวางทางน้ำ <span class='text-indigo-600 text-lg font-bold'>“เจอสาเหตุแล้ว!”</span>" },
                { img: "สำรวจ5.jpeg", heading: "ต้นไม้ผลิใบใหม่", content: "ทั้งสองรีบแจ้งคุณปู่ ชาวบ้านมาช่วยกันเก็บขยะออก ไม่นานน้ำในลำธารก็ไหลผ่านต้นไม้ใหญ่อีกครั้ง หลายสัปดาห์ต่อมาต้นไม้เริ่มผลิใบใหม่ นกและผีเสื้อกลับมา<br>คุณปู่อธิบายว่าสิ่งมีชีวิตต้องพึ่งพากัน ทั้งสองยิ้มอย่างภาคภูมิใจ" },
                { img: "สำรวจ6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การคิดวิเคราะห์และการร่วมมือกันช่วยแก้ปัญหาได้ และมนุษย์ควรดูแลธรรมชาติเพราะสิ่งมีชีวิตต่างพึ่งพาอาศัยกัน</strong></div>" }
            ]
        },
        {
            id: 2,
            name: "ภารกิจลับบนดาวเคราะห์สีฟ้า",
            type: "นิทานผจญภัยวิทยาศาสตร์",
            age: "อายุ 7 ขวบขึ้นไป",
            promote: "การคิดอย่างเป็นระบบและการแก้ไขปัญหา",
            previewText: "นักบินอวกาศรุ่นจิ๋วเดินทางไปสำรวจดาวเคราะห์ลึกลับ แต่ยานอวกาศกลับขัดข้อง พวกเขาต้องเดินทางกลับบ้านได้อย่างไร?",
            coverImg: "ดาว1.jpeg",
            previewImg: "ดาว2.jpeg",
            pages: [
                { img: "ดาว1.jpeg", heading: "ภารกิจลับบนดาวเคราะห์สีฟ้า", content: "นิทานผจญภัยวิทยาศาสตร์ <span class='text-indigo-600 text-2xl'>อวกาศ ดาวเคราะห์ และแรงโน้มถ่วง</span>" },
                { img: "ดาว3.jpeg", heading: "ออกเดินทางสู่อวกาศ", content: "เด็กหญิง “ฟ้าใส” และเด็กชาย “นที” ได้รับเลือกเข้าร่วมภารกิจจำลอง ขึ้นยานอวกาศ “สตาร์วัน” พร้อมหุ่นยนต์ “บี๊บ” ไปยังดาวเคราะห์จำลองสีฟ้า<br>เมื่อลงจอด ทั้งสองสวมชุดนักบิน นทีกระโดดได้สูงกว่าบนโลก บี๊บอธิบายว่าเป็นเพราะแรงโน้มถ่วงต่ำกว่า" },
                { img: "ดาว4.jpeg", heading: "ระบบพลังงานขัดข้อง", content: "ระหว่างสำรวจ ทั้งสองพบก้อนหินเรืองแสง ทันใดนั้นสัญญาณเตือนจากยานก็ดังขึ้น <span class='text-red-600 text-xl font-bold'>ปี๊บ! ปี๊บ!</span> <span class='text-red-500 text-lg'>“ระบบพลังงานสำรองมีปัญหา!”</span> บี๊บแจ้ง<br>นทีตกใจ “แล้วเราจะกลับได้อย่างไร?” ฟ้าใสพยายามตั้งสติ <span class='text-indigo-600 text-lg'>“เราต้องตรวจสอบสาเหตุก่อน”</span>" },
                { img: "ดาว5.jpeg", heading: "ซ่อมแซมระบบพลังงาน", content: "ทั้งสองเปิดคู่มือพบว่าสายเชื่อมต่อแผงพลังงานแสงอาทิตย์หลุด ฟ้าใสและนทีประสานงานกับศูนย์ควบคุม ควบคุมหุ่นยนต์ซ่อมบำรุงให้เชื่อมต่อสายไฟอย่างปลอดภัย<br>ไม่นานไฟสีเขียวก็สว่างขึ้น <span class='text-indigo-600 text-xl font-bold'>“ระบบพลังงานกลับมาแล้ว!”</span> ทั้งสองดีใจมาก" },
                { img: "ดาว6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การใช้ความรู้ การคิดอย่างเป็นเหตุผล และการทำงานเป็นทีมช่วยให้เราผ่านอุปสรรคได้</strong></div>" }
            ]
        },
        {
            id: 3,
            name: "ปริศนาขุมทรัพย์แห่งเกาะสายรุ้ง",
            type: "นิทานผจญภัยไขปริศนา",
            age: "อายุ 7 ขวบขึ้นไป",
            promote: "การคิดวิเคราะห์และการแก้ปัญหาเชิงตรรกะ",
            previewText: "เด็กสองคนพบแผนที่ขุมทรัพย์เก่าแก่ที่เต็มไปด้วยปริศนา พวกเขาต้องใช้ความรู้เรื่องทิศทางเพื่อค้นหาสมบัติที่ซ่อนอยู่",
            coverImg: "เกาะ1.jpeg",
            previewImg: "เกาะ2.jpeg",
            pages: [
                { img: "เกาะ1.jpeg", heading: "ปริศนาขุมทรัพย์แห่งเกาะสายรุ้ง", content: "นิทานผจญภัยไขปริศนา <span class='text-indigo-600 text-2xl'>ทิศทาง แผนที่ และการอ่านสัญลักษณ์</span>" },
                { img: "เกาะ3.jpeg", heading: "เกาะสายรุ้ง", content: "“ภูผา” และ “มะปราง” พบกล่องไม้เก่าในห้องเก็บของ มีแผนที่เกาะและข้อความ <span class='text-amber-600 text-lg'>“ผู้ที่ใช้ปัญญา จะพบสมบัติที่แท้จริง”</span> คุณตาพานั่งเรือไปเกาะสายรุ้ง<br>ภูผากางแผนที่ ปริศนาแรก <span class='text-indigo-600 text-lg'>“จากต้นมะพร้าวใหญ่ เดินไปทางทิศตะวันออกสิบก้าว”</span> มะปรางหยิบเข็มทิศหาทิศจนพบก้อนหินรูปดาว" },
                { img: "เกาะ4.jpeg", heading: "เดินไปที่น้ำตก", content: "ใต้ก้อนหินมีปริศนาข้อต่อไป <span class='text-indigo-600 text-lg'>“จงเดินไปยังที่ที่น้ำไหลจากสูงลงต่ำ”</span> <span class='text-blue-600 text-xl font-bold'>“น้ำตก!”</span> ภูผาร้อง ทั้งสองเดินไปที่น้ำตกพบกล่องไม้เล็ก ๆ พร้อมคำถาม<br><span class='text-indigo-600 text-lg font-bold'>“สิ่งใดมีค่ามากกว่าทองคำ และยิ่งแบ่งปันก็ยิ่งเพิ่มขึ้น?”</span>" },
                { img: "เกาะ5.jpeg", heading: "สมบัติที่แท้จริง", content: "เปิดกล่องพบหนังสือชื่อ <span class='text-indigo-600 text-xl font-bold'>“ความรู้คือขุมทรัพย์”</span> คุณตาอธิบายว่าคือความรู้เพราะเมื่อแบ่งปันแล้วจะไม่หายไป<br>ภูผาและมะปรางดีใจ ได้เรียนรู้การใช้แผนที่ เข็มทิศ และการแก้ปัญหา" },
                { img: "เกาะ6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>ความรู้และการใช้ปัญญามีคุณค่า การคิดวิเคราะห์และร่วมมือกันช่วยให้แก้ปัญหาได้สำเร็จ</strong></div>" }
            ]
        },
        {
            id: 4,
            name: "นักสืบจิ๋วกับคดีน้ำในสระหายไป",
            type: "นิทานสืบสวนและวิทยาศาสตร์",
            age: "อายุ 7 ขวบขึ้นไป",
            promote: "การตั้งสมมติฐาน การทดลอง และการสรุปผล",
            previewText: "น้ำในสระเล็ก ๆ หลังโรงเรียนลดลงอย่างน่าประหลาด เด็กนักสืบจึงต้องค้นหาว่าน้ำหายไปไหน",
            coverImg: "นักสืบ1.jpeg",
            previewImg: "นักสืบ2.jpeg",
            pages: [
                { img: "นักสืบ1.jpeg", heading: "นักสืบจิ๋วกับคดีน้ำในสระหายไป", content: "นิทานสืบสวนและวิทยาศาสตร์ <span class='text-indigo-600 text-2xl'>วัฏจักรน้ำและการระเหย</span>" },
                { img: "นักสืบ3.jpeg", heading: "สระน้ำลดลง", content: "ที่โรงเรียนสายรุ้ง “ข้าวหอม” และ “ต้นน้ำ” สังเกตว่าน้ำในสระกลางสวนลดลง ต้นน้ำหยิบสมุดนักสืบ <span class='text-indigo-600 text-lg font-bold'>“เราต้องสืบหาความจริง!”</span><br>พวกเขาสืบสวน ตั้งสมมติฐานว่าอาจมีสัตว์มากินน้ำ หรือสระมีรูรั่ว คุณครูวิทยาศาสตร์เดินมา <span class='text-indigo-600 text-lg'>“ถ้าอยากรู้คำตอบ เราควรทำทดลอง!”</span>" },
                { img: "นักสืบ4.jpeg", heading: "การระเหยของน้ำ", content: "พวกเขากำหนดทดลองใส่แก้วน้ำสองใบ ใบแรกวางกลางแดด ใบที่สองวางในที่ร่ม เมื่อเวลาผ่านไป น้ำในแก้วโดนแดดลดลงมากกว่า<br>คุณครูอธิบายว่าความร้อนทำให้น้ำระเหยกลายเป็นไอน้ำสู่อากาศ ข้าวหอมและต้นน้ำตรวจสอบสระไม่พบรอยรั่ว จึงสรุปได้ว่าเกิดจากการระเหย" },
                { img: "นักสืบ5.jpeg", heading: "สรุปผลการทดลอง", content: "ข้าวหอมและต้นน้ำบันทึกผลการทดลองลงในสมุด <span class='text-indigo-600 text-xl font-bold'>“คดีน้ำหายไปคลี่คลายแล้ว!”</span><br>ตั้งแต่นั้นมา พวกเขาก็สนุกกับการตั้งคำถามและค้นหาคำตอบด้วยวิทยาศาสตร์" },
                { img: "นักสืบ6.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>เมื่อพบสิ่งที่สงสัย เราควรตั้งคำถาม หาหลักฐาน ทดลอง และใช้เหตุผลก่อนสรุปคำตอบ</strong></div>" }
            ]
        },
        {
            id: 5,
            name: "การเดินทางสู่เมืองแห่งอนาคต",
            type: "นิทานผจญภัยและเทคโนโลยี",
            age: "อายุ 7 ขวบขึ้นไป",
            promote: "ความคิดสร้างสรรค์ การวางแผน และการแก้ปัญหา",
            previewText: "เด็กสองคนเดินทางไปยังเมืองแห่งอนาคตที่เต็มไปด้วยหุ่นยนต์และพลังงานสะอาด แต่เมื่อระบบไฟฟ้าขัดข้อง พวกเขาต้องช่วยกันคิดหาทางแก้ไข",
            coverImg: "เมือง1.jpeg",
            previewImg: "เมือง2.jpeg",
            pages: [
                { img: "เมือง1.jpeg", heading: "การเดินทางสู่เมืองแห่งอนาคต", content: "นิทานผจญภัยและเทคโนโลยี <span class='text-indigo-600 text-2xl'>พลังงานสะอาด สิ่งแวดล้อม และเทคโนโลยี</span>" },
                { img: "เมือง4.jpeg", heading: "โลกแห่งอนาคต", content: "“ไออุ่น” และ “พายุ” ไปเยี่ยมคุณลุงนักประดิษฐ์ สวมแว่นจำลองภาพเสมือนจริงเข้าไปในเมืองกรีนซิตี้ ตึกสูง ต้นไม้ รถยนต์ไฟฟ้า หุ่นยนต์โบโบ้ต้อนรับ<br>โบโบ้พาทั้งสองชมแผงโซลาร์เซลล์และกังหันลมผลิตไฟฟ้าสะอาด" },
                { img: "เมือง5.jpeg", heading: "ระบบไฟฟ้าขัดข้อง", content: "จู่ ๆ ไฟถนนก็ดับลง เสียงสัญญาณเตือนดังขึ้น <span class='text-red-500 text-lg font-bold'>“ระบบพลังงานมีปัญหา!”</span> โบโบ้แจ้ง<br>พลังงานโซลาร์เซลล์ลดลงจากเมฆหนาทึบ ระบบสำรองยังไม่เปิด พายุถามว่า “เราจะช่วยอย่างไร?”" },
                { img: "เมือง6.jpeg", heading: "วางแผนแก้ไข", content: "ไออุ่นเสนอให้ใช้แบตเตอรี่สำรองและจัดลำดับความสำคัญให้โรงพยาบาลก่อน ศูนย์ควบคุมเปิดระบบสำรอง ไฟกลับมาใช้งานได้ โบโบ้พูดอย่างดีใจ <span class='text-indigo-600 text-xl font-bold'>“ภารกิจสำเร็จ!”</span><br>คุณลุงบอกว่าอนาคตที่ดีเริ่มต้นจากความคิดและการกระทำของเรา" },
                { img: "เมือง7.jpeg", heading: "ข้อคิด", content: "<div class='bg-yellow-100 border-4 border-yellow-400 p-4 rounded-2xl shadow-md text-amber-900'><strong>การใช้ความรู้และเทคโนโลยีอย่างรับผิดชอบ รวมถึงการวางแผนอย่างรอบคอบ ช่วยสร้างอนาคตที่ดีและยั่งยืน</strong></div>" }
            ]
        }
    ]
};

function showPage(pageId) {
    document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

function toggleMembership() {
    isPremiumUser = !isPremiumUser;
    updateMembershipUI();
}

function simulateUpgrade() {
    isPremiumUser = true;
    updateMembershipUI();
    closeModal();
    if (currentActiveStory) {
        openEBookReader(currentCategoryKey, currentActiveStory.id);
    }
}

function updateMembershipUI() {
    const statusEl = document.getElementById('membership-status');
    const btnEl = document.getElementById('membership-btn');
    if (isPremiumUser) {
        statusEl.innerText = "สถานะ: พรีเมียม";
        statusEl.className = "text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1.5 rounded-xl";
        btnEl.innerText = "ยกเลิกพรีเมียม";
    } else {
        statusEl.innerText = "สถานะ: ทั่วไป";
        statusEl.className = "text-xs font-bold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-xl";
        btnEl.innerText = "สมัครพรีเมียม";
    }
}

function applyTheme(ageKey) {
    const t = themeConfig[ageKey];
    
    document.getElementById('list-header-box').className = `mb-8 flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-md border-2 border-${t.primary}-200`;
    document.getElementById('list-back-btn').className = `kid-btn text-sm font-bold text-${t.primary}-600 bg-${t.primary}-100 hover:bg-${t.primary}-200 px-5 py-2.5 rounded-xl`;

    document.getElementById('preview-back-btn').className = `kid-btn text-sm font-bold text-${t.primary}-600 bg-white hover:bg-${t.primary}-50 px-5 py-2.5 rounded-xl shadow-md border-2 border-${t.primary}-200`;
    document.getElementById('preview-main-card').className = `bg-white rounded-3xl p-6 sm:p-10 shadow-xl border-4 border-${t.primary}-300 relative max-w-3xl mx-auto text-center`;
    document.getElementById('preview-badge').className = `inline-block bg-${t.primary}-100 text-${t.primary}-700 font-bold text-sm px-4 py-1.5 rounded-full shadow-inner mb-4`;
    document.getElementById('preview-page-story-title').className = `text-2xl sm:text-3xl font-bold text-${t.primary}-600 mb-6`;
    document.getElementById('preview-box-container').className = `bg-${t.primary}-50 p-6 rounded-3xl border-2 border-dashed border-${t.primary}-300 mb-6 flex flex-col items-center`;
    document.getElementById('preview-img-container').className = `bg-white w-full h-80 sm:h-96 rounded-2xl flex flex-col items-center justify-center p-2 text-center shadow-md border-2 border-${t.primary}-200 mb-6 overflow-hidden`;
    document.getElementById('preview-heading-label').className = `text-xl font-bold text-${t.primary}-700`;

    document.getElementById('ebook-back-btn').className = `kid-btn text-sm font-bold text-${t.primary}-600 bg-white hover:bg-${t.primary}-50 px-5 py-2.5 rounded-xl shadow-md border-2 border-${t.primary}-200`;
    document.getElementById('ebook-main-card').className = `bg-white rounded-3xl p-6 sm:p-10 shadow-xl border-4 border-${t.primary}-300 relative max-w-3xl mx-auto`;
    document.getElementById('ebook-page-badge').className = `absolute top-4 right-6 bg-${t.primary}-100 text-${t.primary}-700 font-bold text-sm px-4 py-1.5 rounded-full shadow-inner`;
    document.getElementById('ebook-story-title').className = `text-2xl sm:text-3xl font-bold text-${t.primary}-600`;
    document.getElementById('ebook-box-container').className = `bg-${t.primary}-50 p-6 rounded-3xl border-2 border-dashed border-${t.primary}-300 mb-6 flex flex-col items-center`;
    document.getElementById('ebook-img-container').className = `bg-white w-full h-80 sm:h-96 rounded-2xl flex flex-col items-center justify-center p-2 text-center shadow-md border-2 border-${t.primary}-200 mb-6 overflow-hidden`;
    document.getElementById('ebook-page-heading').className = `text-xl font-bold text-${t.primary}-700`;
    document.getElementById('ebook-footer-border').className = `flex justify-between items-center pt-4 border-t-2 border-${t.primary}-100`;
    document.getElementById('ebook-footer-text').className = `text-${t.primary}-500 font-bold text-sm`;
    
    const btnPrev = document.getElementById('btn-prev');
    btnPrev.className = `kid-btn bg-white hover:bg-${t.primary}-100 text-${t.primary}-600 font-bold px-6 py-3 rounded-2xl border-2 border-${t.primary}-200 disabled:opacity-30 disabled:cursor-not-allowed`;
    
    const btnNext = document.getElementById('btn-next');
    btnNext.className = `kid-btn bg-${t.primary}-500 hover:bg-${t.primary}-600 text-white font-bold px-6 py-3 rounded-2xl disabled:opacity-30 disabled:cursor-not-allowed`;
}

function goToCategoryList(ageKey) {
    currentCategoryKey = ageKey;
    applyTheme(ageKey);
    const t = themeConfig[ageKey];
    const stories = categoriesData[ageKey];
    const container = document.getElementById('story-list-container');
    container.innerHTML = '';

    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = `bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-4 border-${t.primary}-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-center kid-card`;
        card.innerHTML = `
            <div class="bg-${t.primary}-50 w-full h-48 rounded-2xl overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-${t.primary}-200 p-2 text-center">
                <img src="${story.coverImg}" alt="${story.name}" class="w-full h-full object-contain rounded-xl" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="text-xs font-bold text-gray-500" style="display:none;">${story.name}</span>
            </div>
            <div class="md:col-span-2 space-y-3">
                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-xs font-bold px-3 py-1 rounded-xl bg-${t.primary}-100 text-${t.primary}-700">เรื่องที่ ${story.id}</span>
                        <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mt-1">${story.name}</h3>
                    </div>
                </div>
                <div class="text-xs sm:text-sm text-gray-600 font-semibold space-y-1">
                    <p>ประเภท: ${story.type}</p>
                    <p>เหมาะสำหรับ: ${story.age}</p>
                    <p>จุดประสงค์: ${story.promote}</p>
                </div>
                <div class="pt-2 flex gap-3">
                    <button onclick="openPreviewPage(${story.id})" class="flex-1 kid-btn bg-${t.primary}-100 hover:bg-${t.primary}-200 text-${t.primary}-700 font-bold py-3 rounded-2xl text-sm shadow-sm">
                        เปิดหน้าพรีวิวตัวอย่าง
                    </button>
                    <button onclick="openEBookReader('${ageKey}', ${story.id})" class="flex-1 kid-btn bg-${t.primary}-500 hover:bg-${t.primary}-600 text-white font-bold py-3 rounded-2xl text-sm shadow-md">
                        อ่านเรื่องเต็ม ${isPremiumUser ? '' : '🔒'}
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    showPage('page-preview-list');
}

function openPreviewPage(storyId) {
    currentActiveStory = categoriesData[currentCategoryKey].find(s => s.id === storyId);

    applyTheme(currentCategoryKey);
    document.getElementById('preview-page-story-title').innerText = currentActiveStory.name;
    
    const imgContainer = document.getElementById('preview-img-container');
    imgContainer.innerHTML = `
        <img src="${currentActiveStory.previewImg}" alt="พรีวิว" class="w-full h-full object-contain rounded-xl" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="text-pink-900 font-bold text-lg px-6 py-3 rounded-2xl shadow-sm bg-pink-100" style="display:none;">ภาพประกอบพรีวิวขนาดใหญ่</div>
    `;

    document.getElementById('preview-page-text').innerText = currentActiveStory.previewText;

    showPage('page-story-preview');
}

function proceedToFullEBook() {
    if (!isPremiumUser) {
        document.getElementById('premium-modal').classList.remove('hidden');
        return;
    }
    currentEBookPageIndex = 0;
    applyTheme(currentCategoryKey);
    document.getElementById('ebook-story-title').innerText = currentActiveStory.name;
    renderEBookPageContent();
    showPage('page-ebook');
}

function openEBookReader(ageKey, storyId) {
    currentCategoryKey = ageKey;
    currentActiveStory = categoriesData[ageKey].find(s => s.id === storyId);

    if (!isPremiumUser) {
        document.getElementById('premium-modal').classList.remove('hidden');
        return;
    }

    currentEBookPageIndex = 0;
    applyTheme(ageKey);
    document.getElementById('ebook-story-title').innerText = currentActiveStory.name;

    renderEBookPageContent();
    showPage('page-ebook');
}

function closeModal() {
    document.getElementById('premium-modal').classList.add('hidden');
}

function renderEBookPageContent() {
    const pageData = currentActiveStory.pages[currentEBookPageIndex];
    const totalPages = currentActiveStory.pages.length;

    document.getElementById('ebook-page-badge').innerText = `หน้า ${currentEBookPageIndex + 1} / ${totalPages}`;
    
    const ebookImgContainer = document.getElementById('ebook-img-container');
    ebookImgContainer.innerHTML = `
        <img src="${pageData.img}" alt="เนื้อหา" class="w-full h-full object-contain rounded-xl" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="bg-pink-100 text-pink-900 font-bold text-lg px-6 py-3 rounded-2xl shadow-sm" style="display:none;">ภาพประกอบนิทานขนาดใหญ่</div>
    `;

    document.getElementById('ebook-page-heading').innerText = pageData.heading;
    document.getElementById('ebook-page-content').innerHTML = pageData.content;

    document.getElementById('btn-prev').disabled = (currentEBookPageIndex === 0);
    document.getElementById('btn-next').disabled = (currentEBookPageIndex === totalPages - 1);
}

function nextEBookPage() {
    if (currentEBookPageIndex < currentActiveStory.pages.length - 1) {
        currentEBookPageIndex++;
        renderEBookPageContent();
    }
}

function prevEBookPage() {
    if (currentEBookPageIndex > 0) {
        currentEBookPageIndex--;
        renderEBookPageContent();
    }
}

function goBackToCategories() {
    showPage('page-categories');
}

function goBackToPreviewList() {
    goToCategoryList(currentCategoryKey);
}