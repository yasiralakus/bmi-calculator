import { useState } from "react"

export default function App() {

    const [isMetric, setIsMetric] = useState(true)
    const [result, setResult] = useState(null);

    function changeMetric(e) {
        setIsMetric(true)
    }

    function changeImperial(e) {
        setIsMetric(false)
    }

    console.log(isMetric)

    function handleCalculate(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        console.log(formObj)

        if(formObj.bmi === 'metric') {
            let sonuc = (10000 * ( parseFloat(formObj.kg) / (parseFloat(formObj.cm) * parseFloat(formObj.cm))))
            setResult(sonuc.toFixed(1))
        } else {
            let boyInc = (parseFloat(formObj.ft) * 12 + parseFloat(formObj.in))
            let boyMetre = (parseFloat(boyInc) * 0.0254).toFixed(1);

            let kg = ((parseFloat(formObj.st) * 6.35029318) + (parseFloat(formObj.lbs) * 0.45359237)).toFixed(1)

            let sonuc = ( kg / (boyMetre * boyMetre));
            setResult(sonuc.toFixed(1))
        }
    }

    return (
        <div className="container">

            <div className="section-one">

                <header>
                    <img src="./img/logo.png" alt="" />
                </header>

                <main>

                    <div>
                        <h1>Vücut Kütle Endeksi Hesaplayıcı</h1>
                        <p>Vücut kitle indeksi (BMI) hesaplayıcımızı kullanarak kilonuzun boyunuza göre daha iyi anlaşılmasını sağlayın. BMI sağlıklı kilonun tek belirleyicisi olmasa da genel sağlığınızı ve refahınızı değerlendirmek için değerli bir başlangıç noktası sunar.</p>
                    </div>

                    <form onSubmit={handleCalculate}>
                        <h1>Aşağıya bilgilerinizi girin</h1>
                        <div>

                            <div className="radio-input-container">

                                <div className="radio-input">
                                    <input type="radio" value={'metric'} name="bmi" defaultChecked onChange={changeMetric}/>
                                    <div className="circle"></div>
                                </div>

                                <p>Metric</p>

                            </div>

                            <div className="radio-input-container">

                                <div className="radio-input">
                                    <input type="radio" value={'imperial'} name="bmi" onChange={changeImperial}/>
                                    <div className="circle"></div>
                                </div>

                                <p>Imperial</p>

                            </div>

                        </div>

                        {isMetric === true ? 
                            <div className="inputs-metric">
                                <div>
                                    <p>Uzunluk</p>
                                    <div className="inputs-input-container">
                                        <input type="number" name="cm" defaultValue={0} min={0}/>
                                        <h2>cm</h2>
                                    </div>
                                </div>
                                <div>
                                    <p>Ağırlık</p>
                                    <div className="inputs-input-container">
                                        <input type="number" name="kg" defaultValue={0} min={0}/>
                                        <h2>kg</h2>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="inputs-imperial">
                                <div>
                                    <div>
                                        <p>Uzunluk</p>
                                        <div className="inputs-input-container">
                                            <input type="number" name="ft" defaultValue={0} min={0}/>
                                            <h2>ft</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Ağırlık</p>
                                        <div className="inputs-input-container">
                                            <input type="number" name="st" defaultValue={0} min={0}/>
                                            <h2>st</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="p-element">Ağırlık</p>
                                        <div className="inputs-input-container">
                                            <input type="number" name="in" defaultValue={0} min={0}/>
                                            <h2>in</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="p-element">Uzunluk</p>
                                        <div className="inputs-input-container">
                                            <input type="number" name="lbs" defaultValue={0} min={0}/>
                                            <h2>lbs</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        <button>Hesapla</button>

                        <div className="results" style={result === null ? {display: 'flex', flexDirection: 'column', gap: '16px'} : {display: 'grid'}}>

                            {result === null ?
                            
                                <>
                                    <h1>Hoşgeldiniz</h1>
                                    <p>Boyunuzu ve kilonuzu girin, sonucunuzu burada göreceksiniz</p>
                                </>
                                :
                                <>
                                    <div>
                                        <h2>Vücut Kitle İndeksiniz...</h2>
                                        <h1>{result}</h1>
                                    </div>

                                    <div>
                                        {result < 18.5 && <p>Vücut kitle indeksiniz oldukça zayıf olduğunuzu gösteriyor.</p>}
                                        {18.5 < result && result < 24.9 && <p>Vücut kitle indeksiniz sağlıklı bir kiloda olduğunuzu gösteriyor.</p>}
                                        {24.9 < result && result < 29.9 && <p>Vücut kitle indeksiniz fazla kilolu olduğunuzu gösteriyor.</p>}
                                        {29.9 < result && result < 34.9 && <p>Vücut kitle indeksiniz obeziteye girmiş olduğunuzu gösteriyor.</p>}
                                        {34.9 < result && result < 39.9 && <p>Vücut kitle indeksiniz ağır obezite olduğunuzu gösteriyor.</p>}
                                        {result > 40 && <p>Vücut kitle indeksiniz morbid obezite olduğunuzu ve sağlığınız tehlikede olduğunu gösteriyor.</p>}
                                    </div>
                                </>
                            }

                        </div>
                    </form>

                </main>

            </div>

            <div className="section-two">

                <div style={{position: 'relative'}}>
                    <img style={{position: 'absolute', bottom: '0', zIndex: '-1'}} src="./img/blue-bg.png" alt="" />
                    <img src="./img/people.png" alt="" />
                </div>

                <div style={{flexDirection: 'column'}}>
                    <h1>Vücut Kitle İndeksi sonucunuz ne anlama geliyor?</h1>
                    <p>18,5 ila 24,9 arasındaki Vücut Kitle İndeksi aralığı 'sağlıklı kilo' olarak kabul edilir. Sağlıklı bir kiloyu korumak, daha sonra obezite ve tip 2 diyabet gibi sağlık sorunları yaşama şansınızı azaltabilir. Bol miktarda meyve ve sebze içeren, yağ ve şeker içeriği azaltılmış besleyici bir diyet hedefleyin. Ek olarak, ideal olarak haftanın beş günü, günde yaklaşık 30 dakika olmak üzere düzenli fiziksel aktivite yapmaya çalışın.</p>
                </div>


            </div>

            <div className="section-three">

                <div className="section-three-item">

                    <div style={{backgroundColor: '#fbdced'}} className="section-three-item-logo">

                        <img src="./img/purple.png" alt="" />

                    </div>

                    <h1>Sağlıklı beslenme</h1>

                    <p>Sağlıklı beslenme, kilo kontrolünü, hastalıkların önlenmesini, daha iyi sindirimi, bağışıklığı, zihinsel berraklığı ve ruh halini destekler.</p>

                </div>

                <div className="section-three-item">

                    <div style={{backgroundColor: '#fbeee1'}} className="section-three-item-logo">

                        <img src="./img/orange.png" alt="" />

                    </div>

                    <h1>Düzenli egzersiz</h1>

                    <p>Egzersiz kondisyonunuzu geliştirir, kilo kontrolüne yardımcı olur, ruh halinizi yükseltir ve hastalık riskini azaltır, sağlıklı yaşam ve uzun ömürlülüğü destekler.</p>

                </div>

                <div className="section-three-item">

                    <div style={{backgroundColor: '#d9f4f6'}} className="section-three-item-logo">

                        <img src="./img/green.png" alt="" />

                    </div>

                    <h1>Yeterli uyku</h1>

                    <p>Uyku zihinsel berraklığı, duygusal istikrarı ve fiziksel sağlığı geliştirerek genel iyileşmeyi ve gençleşmeyi teşvik eder.</p>

                </div>

            </div>

            <div className="section-four">

                <div className="section-four-top">

                    <div className="content">
                        <h1>Vücut Kitle İndeksi Sınırlamaları</h1>
                        <p>Vücut Kitle İndeksi genellikle sağlıklı kilonun pratik bir göstergesi olmasına rağmen, her insan için uygun değildir. Belirli gruplar Vücut Kitle İndeksi sonuçlarını dikkatle değerlendirmelidir ve bazı durumlarda ölçümün kullanılması faydalı olmayabilir.</p>
                    </div>

                    <div className="section-four-item">

                        <header>
                            <img src="./img/gender.png" alt="" />
                            <h3>Cinsiyet</h3>
                        </header>

                        <p>Kız ve erkek çocukların gelişimi ve vücut yağ bileşimi yaşa göre değişir. Sonuç olarak, Vücut Kitle İndeksi değerlendirilirken çocuğun yaşı ve cinsiyeti dikkate alınır.</p>

                    </div>

                </div>

                <div className="section-four-mid">
                    <div className="section-four-item">

                        <header>
                            <img src="./img/age.png" alt="" />
                            <h3>Yaş</h3>
                        </header>

                        <p>Yaşlanan bireylerde artan vücut yağı ve kas kaybı, Vücut Kitle İndeksinin vücut yağ içeriğini olduğundan düşük hesaplamasına neden olabilir.</p>

                    </div>

                    <div className="section-four-item">

                        <header>
                            <img src="./img/muscle.png" alt="" />
                            <h3>Kas</h3>
                        </header>

                        <p>Vücut Kitle İndeksi, kasları yağdan ayırmadığı için kaslı bireyleri aşırı kilolu veya obez olarak yanlış sınıflandırabilir.</p>

                    </div>
                </div>

                <div className="section-four-bottom">

                    <div className="section-four-item">

                        <header>
                            <img src="./img/pregnancy.png" alt="" />
                            <h3>Hamilelik</h3>
                        </header>

                        <p>Anne adayları bebeklerinin büyümesine bağlı olarak kilo alımı yaşarlar. Hamilelik öncesi sağlıklı bir Vücut Kitle İndeksinin sürdürülmesi, hem anne hem de çocuk için sağlık risklerini en aza indirmek için tavsiye edilir.</p>

                    </div>

                    <div className="section-four-item">

                        <header>
                            <img src="./img/race.png" alt="" />
                            <h3>Irk</h3>
                        </header>

                        <p>Bazı sağlık sorunları, diğerlerine göre daha düşük vücut kitle indeksine sahip bazı Siyah ve Asyalı kökenli bireyleri etkileyebilir. Daha fazla bilgi edinmek için bunu doktorunuzla veya muayenehane hemşirenizle görüşmeniz tavsiye edilir.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}