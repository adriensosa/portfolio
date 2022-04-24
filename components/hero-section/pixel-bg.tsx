import { useEffect } from "react";
import { ChangeBgColor } from "../../utils/ChangeBgColor";

const PixelsBg = () => {
  useEffect(() => {
    pixelHover();
    setTimeout(function () {
      pixelAnimation();
    }, 1000);
  }, []);

  return (
    <div className="pixel-bg">
      <svg
        width={605}
        height={582}
        viewBox="0 0 605 582"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M141.915 4.1713H150.581V12.8384H141.915V4.1713Z" />
        <path d="M188.343 3.16736H199.017V13.8424H188.343V3.16736Z" />
        <path d="M234.98 2.33075H247.326V14.6791H234.98V2.33075Z" />
        <path d="M281.952 1.8287H295.302V15.181H281.952V1.8287Z" />
        <path d="M329.174 1.5777H343.027V15.432H329.174V1.5777Z" />
        <path d="M376.731 1.70319H390.374V15.3483H376.731V1.70319Z" />
        <path d="M424.498 1.99606H437.555V15.0556H424.498V1.99606Z" />
        <path d="M472.64 2.66534H484.359V14.3862H472.64V2.66534Z" />
        <path d="M520.992 3.58566H530.871V13.4659H520.992V3.58566Z" />
        <path d="M593.938 5.30078H600.346V11.709H593.938V5.30078Z" />
        <path d="M72.1057 29.3123H77.9692V35.1767H72.1057V29.3123Z" />
        <path d="M118.157 27.9318H126.823V36.599H118.157V27.9318Z" />
        <path d="M164.501 26.8024H175.384V37.6866H164.501V26.8024Z" />
        <path d="M211.013 25.8402H223.861V38.6906H211.013V25.8402Z" />
        <path d="M257.775 25.1291H272.046V39.4017H257.775V25.1291Z" />
        <path d="M304.873 24.7526H319.854V39.7364H304.873V24.7526Z" />
        <path d="M328.505 24.6689H343.696V39.8619H328.505V24.6689Z" />
        <path d="M352.221 24.6689H367.412V39.8619H352.221V24.6689Z" />
        <path d="M376.02 24.7108H391.127V39.8201H376.02V24.7108Z" />
        <path d="M399.903 24.8363H414.676V39.6109H399.903V24.8363Z" />
        <path d="M447.879 25.3801H461.648V39.1507H447.879V25.3801Z" />
        <path d="M496.147 26.175H508.285V38.3141H496.147V26.175Z" />
        <path d="M544.625 27.2207H554.713V37.3101H544.625V27.2207Z" />
        <path d="M117.613 51.1067H127.367V60.8615H117.613V51.1067Z" />
        <path d="M163.916 49.9354H176.053V62.0746H163.916V49.9354Z" />
        <path d="M210.385 48.9315H224.447V62.9949H210.385V48.9315Z" />
        <path d="M233.725 48.555H248.623V63.4551H233.725V48.555Z" />
        <path d="M257.148 48.2204H272.673V63.748H257.148V48.2204Z" />
        <path d="M280.613 47.9694H296.64V63.9989H280.613V47.9694Z" />
        <path d="M327.835 47.7183H344.365V64.2499H327.835V47.7183Z" />
        <path d="M375.393 47.802H391.713V64.1244H375.393V47.802Z" />
        <path d="M399.276 47.9694H415.303V63.9989H399.276V47.9694Z" />
        <path d="M423.201 48.1785H438.81V63.7898H423.201V48.1785Z" />
        <path d="M447.251 48.4713H462.233V63.4551H447.251V48.4713Z" />
        <path d="M471.386 48.8896H485.573V63.0786H471.386V48.8896Z" />
        <path d="M519.779 49.81H532.126V62.1583H519.779V49.81Z" />
        <path d="M568.424 50.9812H578.387V60.9451H568.424V50.9812Z" />
        <path d="M48.1389 76.5825H54.4206V82.8652H48.1389V76.5825Z" />
        <path d="M94.1067 75.0346H103.484V84.4129H94.1067V75.0346Z" />
        <path d="M140.2 73.696H152.212V85.7097H140.2V73.696Z" />
        <path d="M186.544 72.5665H200.815V86.8391H186.544V72.5665Z" />
        <path d="M233.14 71.7299H249.167V87.7595H233.14V71.7299Z" />
        <path d="M280.069 71.1443H297.226V88.3033H280.069V71.1443Z" />
        <path d="M303.618 70.9769H321.067V88.4287H303.618V70.9769Z" />
        <path d="M327.25 70.8933H344.909V88.5543H327.25V70.8933Z" />
        <path d="M351.008 70.8933H368.666V88.5543H351.008V70.8933Z" />
        <path d="M374.849 70.9769H392.299V88.4287H374.849V70.9769Z" />
        <path d="M422.657 71.3535H439.395V88.0942H422.657V71.3535Z" />
        <path d="M470.842 72.0646H486.158V87.383H470.842V72.0646Z" />
        <path d="M495.018 72.5246H509.414V86.9228H495.018V72.5246Z" />
        <path d="M543.579 73.6123H555.8V85.8352H543.579V73.6123Z" />
        <path d="M592.349 74.951H601.935V84.5384H592.349V74.951Z" />
        <path d="M70.7256 99.1298H79.3914V107.797H70.7256V99.1298Z" />
        <path d="M116.735 97.7075H128.245V109.219H116.735V97.7075Z" />
        <path d="M162.912 96.4108H176.973V110.474H162.912V96.4108Z" />
        <path d="M186.084 95.8669H201.275V111.06H186.084V95.8669Z" />
        <path d="M209.382 95.4067H225.493V111.52H209.382V95.4067Z" />
        <path d="M232.679 94.9885H249.627V111.938H232.679V94.9885Z" />
        <path d="M256.061 94.6119H273.719V112.273H256.061V94.6119Z" />
        <path d="M279.525 94.361H297.686V112.524H279.525V94.361Z" />
        <path d="M303.074 94.1518H321.653V112.733H303.074V94.1518Z" />
        <path d="M326.706 94.0682H345.494V112.859H326.706V94.0682Z" />
        <path d="M350.422 94.0682H369.21V112.859H350.422V94.0682Z" />
        <path d="M374.263 94.1518H392.842V112.733H374.263V94.1518Z" />
        <path d="M398.147 94.3191H416.433V112.608H398.147V94.3191Z" />
        <path d="M422.156 94.5701H439.898V112.315H422.156V94.5701Z" />
        <path d="M446.248 94.9465H463.279V111.98H446.248V94.9465Z" />
        <path d="M494.516 95.7414H509.916V111.143H494.516V95.7414Z" />
        <path d="M518.817 96.327H533.088V110.6H518.817V96.327Z" />
        <path d="M567.545 97.5821H579.265V109.303H567.545V97.5821Z" />
        <path d="M24.5486 124.145H30.6212V130.219H24.5486V124.145Z" />
        <path d="M70.3491 122.514H79.726V131.892H70.3491V122.514Z" />
        <path d="M116.317 121.008H128.664V133.356H116.317V121.008Z" />
        <path d="M162.536 119.753H177.434V134.653H162.536V119.753Z" />
        <path d="M208.963 118.707H225.911V135.657H208.963V118.707Z" />
        <path d="M255.601 117.912H274.179V136.494H255.601V117.912Z" />
        <path d="M279.065 117.661H298.146V136.745H279.065V117.661Z" />
        <path d="M302.614 117.452H322.113V136.954H302.614V117.452Z" />
        <path d="M326.246 117.327H345.954V137.037H326.246V117.327Z" />
        <path d="M349.92 117.285H369.712V137.079H349.92V117.285Z" />
        <path d="M373.761 117.369H393.344V136.954H373.761V117.369Z" />
        <path d="M397.687 117.578H416.893V136.787H397.687V117.578Z" />
        <path d="M421.696 117.87H440.358V136.536H421.696V117.87Z" />
        <path d="M445.787 118.205H463.739V136.159H445.787V118.205Z" />
        <path d="M469.921 118.624H487.078V135.783H469.921V118.624Z" />
        <path d="M518.399 119.628H533.506V134.737H518.399V119.628Z" />
        <path d="M542.742 120.255H556.595V134.109H542.742V120.255Z" />
        <path d="M591.596 121.635H602.688V132.729H591.596V121.635Z" />
        <path d="M70.0981 145.982H79.977V155.862H70.0981V145.982Z" />
        <path d="M116.066 144.517H128.914V157.368H116.066V144.517Z" />
        <path d="M139.113 143.806H153.383V158.079H139.113V143.806Z" />
        <path d="M162.201 143.179H177.726V158.706H162.201V143.179Z" />
        <path d="M185.373 142.593H201.986V159.208H185.373V142.593Z" />
        <path d="M208.587 142.091H226.246V159.752H208.587V142.091Z" />
        <path d="M231.885 141.631H250.463V160.212H231.885V141.631Z" />
        <path d="M255.266 141.296H274.556V160.589H255.266V141.296Z" />
        <path d="M278.689 140.962H298.606V160.882H278.689V140.962Z" />
        <path d="M302.154 140.711H322.573V161.133H302.154V140.711Z" />
        <path d="M325.786 140.627H346.415V161.258H325.786V140.627Z" />
        <path d="M349.46 140.544H370.172V161.258H349.46V140.544Z" />
        <path d="M373.343 140.711H393.763V161.133H373.343V140.711Z" />
        <path d="M397.268 140.92H417.269V160.924H397.268V140.92Z" />
        <path d="M421.319 141.213H440.734V160.631H421.319V141.213Z" />
        <path d="M445.411 141.589H464.074V160.254H445.411V141.589Z" />
        <path d="M469.545 142.008H487.413V159.878H469.545V142.008Z" />
        <path d="M493.805 142.51H510.627V159.334H493.805V142.51Z" />
        <path d="M542.449 143.681H556.929V158.163H542.449V143.681Z" />
        <path d="M591.345 145.103H602.98V156.74H591.345V145.103Z" />
        <path d="M1.20923 172.043H6.48711V177.322H1.20923V172.043Z" />
        <path d="M46.9258 170.286H55.6753V179.037H46.9258V170.286Z" />
        <path d="M92.8101 168.696H104.738V180.626H92.8101V168.696Z" />
        <path d="M138.903 167.316H153.592V182.007H138.903V167.316Z" />
        <path d="M185.122 166.103H202.279V183.262H185.122V166.103Z" />
        <path d="M208.336 165.559H226.497V183.722H208.336V165.559Z" />
        <path d="M231.634 165.099H250.715V184.182H231.634V165.099Z" />
        <path d="M254.931 164.722H274.848V184.642H254.931V164.722Z" />
        <path d="M278.312 164.346H298.941V184.977H278.312V164.346Z" />
        <path d="M301.736 164.053H322.991V185.312H301.736V164.053Z" />
        <path d="M325.326 163.886H346.874V185.437H325.326V163.886Z" />
        <path d="M349.042 163.886H370.591V185.437H349.042V163.886Z" />
        <path d="M372.883 163.969H394.223V185.312H372.883V163.969Z" />
        <path d="M396.934 164.304H417.646V185.019H396.934V164.304Z" />
        <path d="M420.984 164.597H441.11V184.726H420.984V164.597Z" />
        <path d="M445.118 165.015H464.408V184.308H445.118V165.015Z" />
        <path d="M469.294 165.475H487.664V183.847H469.294V165.475Z" />
        <path d="M493.554 165.977H510.92V183.345H493.554V165.977Z" />
        <path d="M517.897 166.605H534.008V182.718H517.897V166.605Z" />
        <path d="M542.24 167.232H557.138V182.132H542.24V167.232Z" />
        <path d="M566.625 167.86H580.185V181.421H566.625V167.86Z" />
        <path d="M69.7217 193.084H80.3116V203.676H69.7217V193.084Z" />
        <path d="M115.689 191.578H129.332V205.224H115.689V191.578Z" />
        <path d="M138.736 190.909H153.718V205.893H138.736V190.909Z" />
        <path d="M161.783 190.24H178.103V206.562H161.783V190.24Z" />
        <path d="M184.955 189.654H202.404V207.106H184.955V189.654Z" />
        <path d="M208.127 189.11H226.706V207.692H208.127V189.11Z" />
        <path d="M231.425 188.65H250.924V208.152H231.425V188.65Z" />
        <path d="M254.68 188.19H275.1V208.612H254.68V188.19Z" />
        <path d="M278.02 187.772H299.276V209.03H278.02V187.772Z" />
        <path d="M301.401 187.437H323.368V209.407H301.401V187.437Z" />
        <path d="M325.075 187.353H347.125V209.407H325.075V187.353Z" />
        <path d="M348.791 187.353H370.841V209.407H348.791V187.353Z" />
        <path d="M372.59 187.437H394.557V209.407H372.59V187.437Z" />
        <path d="M396.599 187.73H417.939V209.072H396.599V187.73Z" />
        <path d="M420.691 188.065H441.32V208.696H420.691V188.065Z" />
        <path d="M444.909 188.525H464.617V208.235H444.909V188.525Z" />
        <path d="M469.085 188.985H487.873V207.775H469.085V188.985Z" />
        <path d="M493.386 189.57H511.045V207.231H493.386V189.57Z" />
        <path d="M542.031 190.742H557.348V206.06H542.031V190.742Z" />
        <path d="M590.927 192.164H603.357V204.596H590.927V192.164Z" />
        <path d="M1 219.313H6.69616V225.01H1V219.313Z" />
        <path d="M46.717 217.556H55.8848V226.725H46.717V217.556Z" />
        <path d="M92.6008 215.966H104.947V228.315H92.6008V215.966Z" />
        <path d="M138.652 214.544H153.843V229.737H138.652V214.544Z" />
        <path d="M184.871 213.289H202.53V230.95H184.871V213.289Z" />
        <path d="M208.043 212.745H226.831V231.536H208.043V212.745Z" />
        <path d="M231.299 212.285H251.007V231.996H231.299V212.285Z" />
        <path d="M254.597 211.825H275.225V232.456H254.597V211.825Z" />
        <path d="M277.853 211.365H299.401V232.916H277.853V211.365Z" />
        <path d="M301.318 211.114H323.368V233.167H301.318V211.114Z" />
        <path d="M325.075 211.114H347.125V233.167H325.075V211.114Z" />
        <path d="M348.791 211.114H370.841V233.167H348.791V211.114Z" />
        <path d="M372.507 211.114H394.557V233.167H372.507V211.114Z" />
        <path d="M396.432 211.239H418.189V233H396.432V211.239Z" />
        <path d="M420.607 211.7H441.445V232.54H420.607V211.7Z" />
        <path d="M444.784 212.16H464.701V232.08H444.784V212.16Z" />
        <path d="M469.001 212.62H487.999V231.62H469.001V212.62Z" />
        <path d="M493.303 213.206H511.171V231.076H493.303V213.206Z" />
        <path d="M517.562 213.749H534.301V230.49H517.562V213.749Z" />
        <path d="M541.989 214.419H557.389V229.821H541.989V214.419Z" />
        <path d="M566.375 215.088H580.436V229.151H566.375V215.088Z" />
        <path d="M46.717 241.275H55.8848V250.444H46.717V241.275Z" />
        <path d="M92.6008 239.685H104.947V252.033H92.6008V239.685Z" />
        <path d="M138.652 238.263H153.843V253.456H138.652V238.263Z" />
        <path d="M161.699 237.594H178.228V254.125H161.699V237.594Z" />
        <path d="M184.871 237.05H202.53V254.711H184.871V237.05Z" />
        <path d="M208.043 236.464H226.831V255.255H208.043V236.464Z" />
        <path d="M231.257 235.962H251.049V255.757H231.257V235.962Z" />
        <path d="M254.513 235.502H275.225V256.217H254.513V235.502Z" />
        <path d="M277.853 235.084H299.401V256.635H277.853V235.084Z" />
        <path d="M301.318 234.833H323.368V256.886H301.318V234.833Z" />
        <path d="M325.075 234.833H347.125V256.886H325.075V234.833Z" />
        <path d="M348.791 234.833H370.841V256.886H348.791V234.833Z" />
        <path d="M372.507 234.833H394.557V256.886H372.507V234.833Z" />
        <path d="M396.432 235H418.189V256.761H396.432V235Z" />
        <path d="M420.566 235.418H441.487V256.342H420.566V235.418Z" />
        <path d="M444.784 235.92H464.701V255.84H444.784V235.92Z" />
        <path d="M469.001 236.38H487.999V255.38H469.001V236.38Z" />
        <path d="M493.219 236.882H511.171V254.836H493.219V236.882Z" />
        <path d="M541.948 238.096H557.473V253.623H541.948V238.096Z" />
        <path d="M590.885 239.602H603.441V252.159H590.885V239.602Z" />
        <path d="M1.08374 266.876H6.57076V272.364H1.08374V266.876Z" />
        <path d="M46.8423 265.119H55.8009V274.079H46.8423V265.119Z" />
        <path d="M92.6428 263.488H104.864V275.71H92.6428V263.488Z" />
        <path d="M138.694 262.065H153.802V277.175H138.694V262.065Z" />
        <path d="M184.955 260.894H202.404V278.346H184.955V260.894Z" />
        <path d="M208.127 260.308H226.706V278.89H208.127V260.308Z" />
        <path d="M231.383 259.806H250.965V279.392H231.383V259.806Z" />
        <path d="M254.68 259.388H275.1V279.81H254.68V259.388Z" />
        <path d="M277.936 258.928H299.276V280.27H277.936V258.928Z" />
        <path d="M301.401 258.635H323.368V280.605H301.401V258.635Z" />
        <path d="M325.075 258.551H347.125V280.605H325.075V258.551Z" />
        <path d="M348.791 258.551H370.841V280.605H348.791V258.551Z" />
        <path d="M372.507 258.551H394.557V280.605H372.507V258.551Z" />
        <path d="M396.557 258.886H418.022V280.312H396.557V258.886Z" />
        <path d="M420.691 259.304H441.32V279.935H420.691V259.304Z" />
        <path d="M444.909 259.765H464.617V279.475H444.909V259.765Z" />
        <path d="M469.085 260.225H487.873V279.015H469.085V260.225Z" />
        <path d="M493.345 260.727H511.087V278.471H493.345V260.727Z" />
        <path d="M517.688 261.354H534.217V277.886H517.688V261.354Z" />
        <path d="M542.031 261.94H557.348V277.258H542.031V261.94Z" />
        <path d="M566.416 262.609H580.394V276.589H566.416V262.609Z" />
        <path d="M69.8472 288.127H80.2279V298.509H69.8472V288.127Z" />
        <path d="M115.773 286.621H129.249V300.098H115.773V286.621Z" />
        <path d="M138.82 285.951H153.592V300.726H138.82V285.951Z" />
        <path d="M161.95 285.324H177.977V301.353H161.95V285.324Z" />
        <path d="M185.08 284.696H202.321V301.939H185.08V284.696Z" />
        <path d="M208.294 284.194H226.58V302.483H208.294V284.194Z" />
        <path d="M231.55 283.734H250.756V302.943H231.55V283.734Z" />
        <path d="M254.89 283.316H274.891V303.319H254.89V283.316Z" />
        <path d="M278.271 282.981H298.983V303.696H278.271V282.981Z" />
        <path d="M301.694 282.647H323.033V303.989H301.694V282.647Z" />
        <path d="M325.2 282.479H346.958V304.24H325.2V282.479Z" />
        <path d="M348.958 282.479H370.716V304.24H348.958V282.479Z" />
        <path d="M372.841 282.605H394.264V304.031H372.841V282.605Z" />
        <path d="M396.808 282.856H417.73V303.78H396.808V282.856Z" />
        <path d="M420.9 283.232H441.11V303.445H420.9V283.232Z" />
        <path d="M445.035 283.651H464.45V303.069H445.035V283.651Z" />
        <path d="M469.294 284.153H487.664V302.525H469.294V284.153Z" />
        <path d="M517.855 285.24H534.092V301.479H517.855V285.24Z" />
        <path d="M566.584 286.495H580.227V300.14H566.584V286.495Z" />
        <path d="M1.41821 314.648H6.27783V319.508H1.41821V314.648Z" />
        <path d="M47.135 312.891H55.4663V321.224H47.135V312.891Z" />
        <path d="M93.0193 311.302H104.529V322.813H93.0193V311.302Z" />
        <path d="M139.029 309.879H153.425V324.277H139.029V309.879Z" />
        <path d="M185.331 308.708H202.07V325.449H185.331V308.708Z" />
        <path d="M208.545 308.206H226.288V325.951H208.545V308.206Z" />
        <path d="M231.843 307.746H250.506V326.411H231.843V307.746Z" />
        <path d="M255.182 307.369H274.597V326.787H255.182V307.369Z" />
        <path d="M278.563 307.035H298.69V327.164H278.563V307.035Z" />
        <path d="M302.028 306.742H322.657V327.373H302.028V306.742Z" />
        <path d="M325.66 306.658H346.498V327.498H325.66V306.658Z" />
        <path d="M349.376 306.616H370.298V327.54H349.376V306.616Z" />
        <path d="M373.26 306.742H393.888V327.373H373.26V306.742Z" />
        <path d="M397.185 306.951H417.395V327.164H397.185V306.951Z" />
        <path d="M421.235 307.286H440.818V326.871H421.235V307.286Z" />
        <path d="M445.369 307.662H464.157V326.453H445.369V307.662Z" />
        <path d="M469.503 308.08H487.455V326.034H469.503V308.08Z" />
        <path d="M493.763 308.582H510.711V325.532H493.763V308.582Z" />
        <path d="M518.064 309.168H533.883V324.988H518.064V309.168Z" />
        <path d="M542.407 309.796H557.012V324.403H542.407V309.796Z" />
        <path d="M591.303 311.218H603.023V322.939H591.303V311.218Z" />
        <path d="M70.3071 336.066H79.7677V345.528H70.3071V336.066Z" />
        <path d="M116.275 334.602H128.705V347.034H116.275V334.602Z" />
        <path d="M162.452 333.305H177.434V348.289H162.452V333.305Z" />
        <path d="M208.922 332.301H225.953V349.335H208.922V332.301Z" />
        <path d="M232.177 331.841H250.129V349.795H232.177V331.841Z" />
        <path d="M255.559 331.464H274.221V350.129H255.559V331.464Z" />
        <path d="M278.982 331.172H298.272V350.464H278.982V331.172Z" />
        <path d="M302.489 330.962H322.197V350.673H302.489V330.962Z" />
        <path d="M326.121 330.837H346.038V350.757H326.121V330.837Z" />
        <path d="M349.878 330.837H369.796V350.757H349.878V330.837Z" />
        <path d="M373.72 330.962H393.428V350.673H373.72V330.962Z" />
        <path d="M397.603 331.088H417.018V350.506H397.603V331.088Z" />
        <path d="M421.612 331.423H440.4V350.213H421.612V331.423Z" />
        <path d="M445.704 331.757H463.781V349.837H445.704V331.757Z" />
        <path d="M494.098 332.678H510.334V348.916H494.098V332.678Z" />
        <path d="M542.7 333.807H556.678V347.787H542.7V333.807Z" />
        <path d="M591.554 335.187H602.772V346.406H591.554V335.187Z" />
        <path d="M24.8413 361.793H30.3283V367.281H24.8413V361.793Z" />
        <path d="M70.6418 360.161H79.3914V368.912H70.6418V360.161Z" />
        <path d="M116.651 358.697H128.37V370.418H116.651V358.697Z" />
        <path d="M162.87 357.442H177.057V371.631H162.87V357.442Z" />
        <path d="M186.042 356.898H201.359V372.217H186.042V356.898Z" />
        <path d="M232.595 355.978H249.752V373.137H232.595V355.978Z" />
        <path d="M255.977 355.602H273.845V373.472H255.977V355.602Z" />
        <path d="M279.442 355.351H297.811V373.723H279.442V355.351Z" />
        <path d="M302.948 355.141H321.736V373.932H302.948V355.141Z" />
        <path d="M326.581 355.058H345.578V374.057H326.581V355.058Z" />
        <path d="M350.338 355.058H369.336V374.057H350.338V355.058Z" />
        <path d="M374.18 355.141H392.968V373.932H374.18V355.141Z" />
        <path d="M398.105 355.351H416.474V373.723H398.105V355.351Z" />
        <path d="M422.03 355.56H439.981V373.514H422.03V355.56Z" />
        <path d="M446.122 355.936H463.362V373.179H446.122V355.936Z" />
        <path d="M470.256 356.313H486.702V372.76H470.256V356.313Z" />
        <path d="M494.474 356.773H510V372.3H494.474V356.773Z" />
        <path d="M518.775 357.358H533.172V371.757H518.775V357.358Z" />
        <path d="M567.462 358.572H579.39V370.502H567.462V358.572Z" />
        <path d="M94.0229 383.545H103.484V393.007H94.0229V383.545Z" />
        <path d="M140.158 382.207H152.295V394.346H140.158V382.207Z" />
        <path d="M186.502 381.077H200.899V395.475H186.502V381.077Z" />
        <path d="M209.716 380.575H225.116V395.977H209.716V380.575Z" />
        <path d="M256.479 379.864H273.301V396.688H256.479V379.864Z" />
        <path d="M303.534 379.446H321.193V397.107H303.534V379.446Z" />
        <path d="M327.166 379.362H345.034V397.232H327.166V379.362Z" />
        <path d="M350.84 379.278H368.792V397.232H350.84V379.278Z" />
        <path d="M374.682 379.404H392.424V397.148H374.682V379.404Z" />
        <path d="M398.565 379.571H416.014V397.023H398.565V379.571Z" />
        <path d="M446.624 380.157H462.861V396.396H446.624V380.157Z" />
        <path d="M494.934 380.993H509.54V395.601H494.934V380.993Z" />
        <path d="M543.537 382.123H555.884V394.471H543.537V382.123Z" />
        <path d="M592.266 383.378H602.019V393.133H592.266V383.378Z" />
        <path d="M48.4739 409.188H54.17V414.885H48.4739V409.188Z" />
        <path d="M117.572 407.055H127.45V416.935H117.572V407.055Z" />
        <path d="M163.79 405.842H176.137V418.19H163.79V405.842Z" />
        <path d="M210.302 404.88H224.573V419.152H210.302V404.88Z" />
        <path d="M233.6 404.461H248.707V419.57H233.6V404.461Z" />
        <path d="M257.022 404.168H272.715V419.863H257.022V404.168Z" />
        <path d="M280.571 403.959H296.682V420.072H280.571V403.959Z" />
        <path d="M327.71 403.625H344.448V420.365H327.71V403.625Z" />
        <path d="M375.309 403.75H391.838V420.282H375.309V403.75Z" />
        <path d="M399.193 403.917H415.429V420.156H399.193V403.917Z" />
        <path d="M423.117 404.085H438.935V419.905H423.117V404.085Z" />
        <path d="M447.168 404.419H462.359V419.612H447.168V404.419Z" />
        <path d="M471.302 404.838H485.698V419.236H471.302V404.838Z" />
        <path d="M519.696 405.758H532.251V418.316H519.696V405.758Z" />
        <path d="M568.382 406.971H578.47V417.061H568.382V406.971Z" />
        <path d="M71.9385 432.656H78.1366V438.855H71.9385V432.656Z" />
        <path d="M118.073 431.317H126.907V440.152H118.073V431.317Z" />
        <path d="M164.376 430.146H175.593V441.365H164.376V430.146Z" />
        <path d="M210.845 429.184H223.987V442.327H210.845V429.184Z" />
        <path d="M257.65 428.515H272.13V442.996H257.65V428.515Z" />
        <path d="M304.705 428.096H320.022V443.415H304.705V428.096Z" />
        <path d="M328.379 428.055H343.779V443.457H328.379V428.055Z" />
        <path d="M352.053 428.013H367.579V443.54H352.053V428.013Z" />
        <path d="M399.778 428.264H414.76V443.247H399.778V428.264Z" />
        <path d="M447.753 428.766H461.731V442.745H447.753V428.766Z" />
        <path d="M496.063 429.56H508.41V441.909H496.063V429.56Z" />
        <path d="M544.583 430.648H554.754V440.821H544.583V430.648Z" />
        <path d="M593.269 431.903H601.015V439.65H593.269V431.903Z" />
        <path d="M141.79 455.036H150.623V463.871H141.79V455.036Z" />
        <path d="M188.259 454.032H199.142V464.916H188.259V454.032Z" />
        <path d="M234.896 453.195H247.452V465.753H234.896V453.195Z" />
        <path d="M281.826 452.693H295.385V466.255H281.826V452.693Z" />
        <path d="M329.049 452.443H343.11V466.506H329.049V452.443Z" />
        <path d="M376.564 452.484H390.542V466.464H376.564V452.484Z" />
        <path d="M424.414 452.861H437.681V466.129H424.414V452.861Z" />
        <path d="M472.515 453.53H484.443V465.46H472.515V453.53Z" />
        <path d="M520.909 454.45H530.997V464.54H520.909V454.45Z" />
        <path d="M569.512 455.58H577.341V463.41H569.512V455.58Z" />
        <path d="M96.198 480.637H101.35V485.79H96.198V480.637Z" />
        <path d="M165.631 478.88H174.296V487.547H165.631V478.88Z" />
        <path d="M212.184 477.96H222.69V488.468H212.184V477.96Z" />
        <path d="M259.072 477.416H270.708V489.053H259.072V477.416Z" />
        <path d="M306.127 476.998H318.558V489.43H306.127V476.998Z" />
        <path d="M353.559 476.956H366.115V489.513H353.559V476.956Z" />
        <path d="M401.158 477.123H413.379V489.346H401.158V477.123Z" />
        <path d="M449.134 477.625H460.351V488.844H449.134V477.625Z" />
        <path d="M497.318 478.336H507.072V488.091H497.318V478.336Z" />
        <path d="M545.837 479.34H553.583V487.087H545.837V479.34Z" />
        <path d="M594.482 480.554H599.843V485.916H594.482V480.554Z" />
        <path d="M189.639 502.892H197.762V511.015H189.639V502.892Z" />
        <path d="M236.36 502.181H245.946V511.768H236.36V502.181Z" />
        <path d="M283.332 501.637H293.922V512.228H283.332V501.637Z" />
        <path d="M330.554 501.386H341.646V512.479H330.554V501.386Z" />
        <path d="M378.112 501.511H388.994V512.396H378.112V501.511Z" />
        <path d="M425.92 501.846H436.091V512.019H425.92V501.846Z" />
        <path d="M474.021 502.474H482.979V511.434H474.021V502.474Z" />
        <path d="M522.289 503.31H529.617V510.639H522.289V503.31Z" />
        <path d="M143.839 528.326H148.615V533.102H143.839V528.326Z" />
        <path d="M260.578 526.36H269.244V535.027H260.578V526.36Z" />
        <path d="M307.717 526.067H316.968V535.319H307.717V526.067Z" />
        <path d="M355.148 526.025H364.525V535.403H355.148V526.025Z" />
        <path d="M402.831 526.192H411.79V535.152H402.831V526.192Z" />
        <path d="M450.681 526.611H458.804V534.734H450.681V526.611Z" />
        <path d="M191.229 551.961H196.172V556.905H191.229V551.961Z" />
        <path d="M332.228 550.58H339.973V558.327H332.228V550.58Z" />
        <path d="M379.743 550.622H387.363V558.243H379.743V550.622Z" />
        <path d="M475.526 551.501H481.39V557.365H475.526V551.501Z" />
        <path d="M523.794 552.254H528.152V556.612H523.794V552.254Z" />
        <path d="M238.87 575.888H243.436V580.456H238.87V575.888Z" />
        <path d="M285.883 575.428H291.37V580.916H285.883V575.428Z" />
        <path d="M404.463 575.303H410.159V581H404.463V575.303Z" />
      </svg>
    </div>
  );
};

const pixelAnimation = (shuffle?: boolean) => {
  const $pixels = [...document.querySelectorAll(".pixel-bg path")];
  if (shuffle) {
    $pixels.sort(() => Math.random() - 0.5);
  }
  $pixels.forEach(function ($pixel, i) {
    setTimeout(function () {
      $pixel.classList.add("pixel-fill");
    }, 3 * i);
  });
  setTimeout(function () {
    $pixels.forEach(function ($pixel, i) {
      setTimeout(function () {
        $pixel.classList.add("pixel-stroke");
      }, 3 * i);
    });
  }, 200);
  setTimeout(function () {
    $pixels.forEach(function ($pixel, i) {
      setTimeout(function () {
        $pixel.classList.remove("pixel-fill");
      }, 3 * i);
    });
  }, 400);
};

const pixelHover = (params) => {
  const $pixelsBG = document.querySelector(".pixel-bg");
  const $pixels = document.querySelectorAll(".pixel-bg path");
  $pixelsBG.onmousemove = function (e) {
    const mouseTop = e.clientY - $pixelsBG.offsetTop;
    const mouseLeft = e.clientX - $pixelsBG.offsetLeft;
    let complete = true;
    $pixels.forEach(function ($pixel) {
      if (!$pixel.classList.contains("pixel-fill")) {
        complete = false;
      }
    });
    if (complete) {
      $pixels.forEach(function ($pixel) {
        $pixel.classList.remove("pixel-stroke");
      });
      pixelAnimation(true);
      ChangeBgColor(true);
    }
    $pixels.forEach(function ($pixel) {
      const pixelTop = $pixel.getBoundingClientRect().top - $pixelsBG.offsetTop;
      const pixelLeft =
        $pixel.getBoundingClientRect().left - $pixelsBG.offsetLeft;
      let matchTop;
      let matchLeft;
      const diffTop = mouseTop - pixelTop;
      const diffLeft = mouseLeft - pixelLeft;
      if (diffTop > -75 && diffTop < 75) {
        matchTop = true;
      } else {
        matchTop = false;
      }
      if (diffLeft > -75 && diffLeft < 75) {
        matchLeft = true;
      } else {
        matchLeft = false;
      }
      if (matchTop && matchLeft) {
        $pixel.classList.add("pixel-fill");
      } else {
        // $pixel.classList.remove("pixel-fill");
      }
    });
  };
};

export { PixelsBg, pixelAnimation };