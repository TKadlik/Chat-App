import React from "react";
import "./Emoji.style.css";

const emojis = [
  "&#x1F600;",
  "&#x1F601;",
  "&#x1F602;",
  "&#x1F603;",
  "&#x1F604;",
  "&#x1F605;",
  "&#x1F606;",
  "&#x1F607;",
  "&#x1F608;",
  "&#x1F609;",
  "&#x1F60A;",
  "&#x1F60B;",
  "&#x1F60C;",
  "&#x1F60D;",
  "&#x1F60E;",
  "&#x1F60F;",
  "&#x1F610;",
  "&#x1F611;",
  "&#x1F612;",
  "&#x1F613;",
  "&#x1F614;",
  "&#x1F615;",
  "&#x1F616;",
  "&#x1F617;",
  "&#x1F618;",
  "&#x1F619;",
  "&#x1F61A;",
  "&#x1F61B;",
  "&#x1F61C;",
  "&#x1F61D;",
  "&#x1F61E;",
  "&#x1F61F;",
  "&#x1F620;",
  "&#x1F621;",
  "&#x1F622;",
  "&#x1F623;",
  "&#x1F624;",
  "&#x1F625;",
  "&#x1F626;",
  "&#x1F627;",
  "&#x1F628;",
  "&#x1F629;",
  "&#x1F62A;",
  "&#x1F62B;",
  "&#x1F62C;",
  "&#x1F62D;",
  "&#x1F62E;",
  "&#x1F62F;",
  "&#x1F630;",
  "&#x1F631;",
  "&#x1F632;",
  "&#x1F633;",
  "&#x1F634;",
  "&#x1F635;",
  "&#x1F636;",
  "&#x1F637;",
  "&#x1F638;",
  "&#x1F639;",
  "&#x1F63A;",
  "&#x1F63B;",
  "&#x1F63C;",
  "&#x1F63D;",
  "&#x1F63E;",
  "&#x1F63F;",
  "&#x1F640;",
  "&#x1F641;",
  "&#x1F642;",
  "&#x1F643;",
  "&#x1F644;",
  "&#x1F32D;",
  "&#x1F32E;",
  "&#x1F32F;",
  "&#x1F330;",
  "&#x1F331;",
  "&#x1F332;",
  "&#x1F333;",
  "&#x1F334;",
  "&#x1F335;",
  "&#x1F336;",
  "&#x1F337;",
  "&#x1F338;",
  "&#x1F339;",
  "&#x1F33A;",
  "&#x1F33B;",
  "&#x1F33C;",
  "&#x1F33D;",
  "&#x1F33E;",
  "&#x1F33F;",
  "&#x1F340;",
  "&#x1F341;",
  "&#x1F342;",
  "&#x1F343;",
  "&#x1F344;",
  "&#x1F345;",
  "&#x1F346;",
  "&#x1F347;",
  "&#x1F348;",
  "&#x1F349;",
  "&#x1F34A;",
  "&#x1F34B;",
  "&#x1F34C;",
  "&#x1F34D;",
  "&#x1F34E;",
  "&#x1F34F;",
  "&#x1F350;",
  "&#x1F351;",
  "&#x1F352;",
  "&#x1F353;",
  "&#x1F354;",
  "&#x1F355;",
  "&#x1F356;",
  "&#x1F357;",
  "&#x1F358;",
  "&#x1F359;",
  "&#x1F35A;",
  "&#x1F35B;",
  "&#x1F35C;",
  "&#x1F35D;",
  "&#x1F35E;",
  "&#x1F35F;",
  "&#x1F360;",
  "&#x1F361;",
  "&#x1F362;",
  "&#x1F363;",
  "&#x1F364;",
  "&#x1F365;",
  "&#x1F366;",
  "&#x1F367;",
  "&#x1F368;",
  "&#x1F369;",
  "&#x1F36A;",
  "&#x1F36B;",
  "&#x1F36C;",
  "&#x1F36D;",
  "&#x1F36E;",
  "&#x1F36F;",
  "&#x1F370;",
  "&#x1F371;",
  "&#x1F372;",
  "&#x1F373;",
  "&#x1F374;",
  "&#x1F375;",
  "&#x1F376;",
  "&#x1F377;",
  "&#x1F378;",
  "&#x1F379;",
  "&#x1F37A;",
  "&#x1F37B;",
  "&#x1F37C;",
  "&#x1F37D;",
  "&#x1F37E;",
  "&#x1F37F;",
  "&#x1F380;",
  "&#x1F381;",
  "&#x1F382;",
  "&#x1F383;",
  "&#x1F384;",
  "&#x1F385;",
  "&#x1F386;",
  "&#x1F387;",
  "&#x1F388;",
  "&#x1F389;",
  "&#x1F38A;",
  "&#x1F38B;",
  "&#x1F38C;",
  "&#x1F38D;",
  "&#x1F38E;",
  "&#x1F38F;",
  "&#x1F390;",
  "&#x1F391;",
  "&#x1F392;",
  "&#x1F393;",
  "&#x1F3A0;",
  "&#x1F3A1;",
  "&#x1F3A2;",
  "&#x1F3A3;",
  "&#x1F3A4;",
  "&#x1F3A5;",
  "&#x1F3A6;",
  "&#x1F3A7;",
  "&#x1F3A8;",
  "&#x1F3A9;",
  "&#x1F3AA;",
  "&#x1F3AB;",
  "&#x1F3AC;",
  "&#x1F3AD;",
  "&#x1F3AE;",
  "&#x1F3AF;",
  "&#x1F3B0;",
  "&#x1F3B1;",
  "&#x1F3B2;",
  "&#x1F3B3;",
  "&#x1F3B4;",
  "&#x1F3B5;",
  "&#x1F3B6;",
  "&#x1F3B7;",
  "&#x1F3B8;",
  "&#x1F3B9;",
  "&#x1F3BA;",
  "&#x1F3BB;",
  "&#x1F3BC;",
  "&#x1F3BD;",
  "&#x1F3BE;",
  "&#x1F3BF;",
  "&#x1F3C0;",
  "&#x1F3C1;",
  "&#x1F3C2;",
  "&#x1F3C3;",
  "&#x1F3C4;",
  "&#x1F3C5;",
  "&#x1F3C6;",
  "&#x1F3C7;",
  "&#x1F3C8;",
  "&#x1F3C9;",
  "&#x1F3CA;",
  "&#x1F3CB;",
  "&#x1F3CC;",
  "&#x1F3CD;",
  "&#x1F3CE;",
  "&#x1F3CF;",
  "&#x1F3D0;",
  "&#x1F3D1;",
  "&#x1F3D2;",
  "&#x1F3D3;",
  "&#x1F400;",
  "&#x1F401;",
  "&#x1F402;",
  "&#x1F403;",
  "&#x1F404;",
  "&#x1F405;",
  "&#x1F406;",
  "&#x1F407;",
  "&#x1F408;",
  "&#x1F409;",
  "&#x1F40A;",
  "&#x1F40B;",
  "&#x1F40C;",
  "&#x1F40D;",
  "&#x1F40E;",
  "&#x1F40F;",
  "&#x1F410;",
  "&#x1F411;",
  "&#x1F412;",
  "&#x1F413;",
  "&#x1F414;",
  "&#x1F415;",
  "&#x1F416;",
  "&#x1F417;",
  "&#x1F418;",
  "&#x1F419;",
  "&#x1F41A;",
  "&#x1F41B;",
  "&#x1F41C;",
  "&#x1F41D;",
  "&#x1F41E;",
  "&#x1F41F;",
  "&#x1F420;",
  "&#x1F421;",
  "&#x1F422;",
  "&#x1F423;",
  "&#x1F424;",
  "&#x1F425;",
  "&#x1F426;",
  "&#x1F427;",
  "&#x1F428;",
  "&#x1F429;",
  "&#x1F42A;",
  "&#x1F42B;",
  "&#x1F42C;",
  "&#x1F42D;",
  "&#x1F42E;",
  "&#x1F42F;",
  "&#x1F430;",
  "&#x1F431;",
  "&#x1F432;",
  "&#x1F433;",
  "&#x1F434;",
  "&#x1F435;",
  "&#x1F436;",
  "&#x1F437;",
  "&#x1F438;",
  "&#x1F439;",
  "&#x1F43A;",
  "&#x1F43B;",
  "&#x1F43C;",
  "&#x1F43D;",
  "&#x1F43E;",
  "&#x1F43F;",
  "&#x1F440;",
  "&#x1F441;",
  "&#x1F442;",
  "&#x1F443;",
  "&#x1F444;",
  "&#x1F445;",
  "&#x1F446;",
  "&#x1F447;",
  "&#x1F448;",
  "&#x1F449;",
  "&#x1F44A;",
  "&#x1F44B;",
  "&#x1F44C;",
  "&#x1F44D;",
  "&#x1F44E;",
  "&#x1F44F;",
  "&#x1F450;",
  "&#x1F451;",
  "&#x1F452;",
  "&#x1F453;",
  "&#x1F454;",
  "&#x1F455;",
  "&#x1F456;",
  "&#x1F457;",
  "&#x1F458;",
  "&#x1F459;",
  "&#x1F45A;",
  "&#x1F45B;",
  "&#x1F45C;",
  "&#x1F45D;",
  "&#x1F45E;",
  "&#x1F45F;",
  "&#x1F460;",
  "&#x1F461;",
  "&#x1F462;",
  "&#x1F463;",
  "&#x1F464;",
  "&#x1F465;",
  "&#x1F466;",
  "&#x1F467;",
  "&#x1F468;",
  "&#x1F469;",
  "&#x1F46A;",
  "&#x1F46B;",
  "&#x1F46C;",
  "&#x1F46D;",
  "&#x1F46E;",
  "&#x1F46F;",
  "&#x1F470;",
  "&#x1F471;",
  "&#x1F472;",
  "&#x1F473;",
  "&#x1F474;",
  "&#x1F475;",
  "&#x1F476;",
  "&#x1F477;",
  "&#x1F478;",
  "&#x1F479;",
  "&#x1F47A;",
  "&#x1F47B;",
  "&#x1F47C;",
  "&#x1F47D;",
  "&#x1F47E;",
  "&#x1F47F;",
  "&#x1F480;",
  "&#x1F481;",
  "&#x1F482;",
  "&#x1F483;",
  "&#x1F484;",
  "&#x1F485;",
  "&#x1F486;",
  "&#x1F487;",
  "&#x1F488;",
  "&#x1F489;",
  "&#x1F48A;",
  "&#x1F48B;",
  "&#x1F48C;",
  "&#x1F48D;",
  "&#x1F48E;",
  "&#x1F48F;",
  "&#x1F490;",
  "&#x1F491;",
  "&#x1F492;",
  "&#x1F493;",
  "&#x1F494;",
  "&#x1F495;",
  "&#x1F496;",
  "&#x1F497;",
  "&#x1F498;",
  "&#x1F499;",
  "&#x1F49A;",
  "&#x1F49B;",
  "&#x1F49C;",
  "&#x1F49D;",
  "&#x1F49E;",
  "&#x1F49F;",
  "&#x1F4A0;",
  "&#x1F4A1;",
  "&#x1F4A2;",
  "&#x1F4A3;",
  "&#x1F4A4;",
  "&#x1F4A5;",
  "&#x1F4A6;",
  "&#x1F4A7;",
  "&#x1F4A8;",
  "&#x1F4A9;",
  "&#x1F4AA;",
  "&#x1F4AB;",
  "&#x1F4AC;",
  "&#x1F4AD;",
  "&#x1F645;",
  "&#x1F646;",
  "&#x1F647;",
  "&#x1F648;",
  "&#x1F649;",
  "&#x1F64A;",
  "&#x1F64B;",
  "&#x1F64C;",
  "&#x1F64D;",
  "&#x1F64E;",
  "&#x1F64F;",
  "&#x1F910;",
  "&#x1F911;",
  "&#x1F912;",
  "&#x1F913;",
  "&#x1F914;",
  "&#x1F915;",
  "&#x1F916;",
  "&#x1F917;",
  "&#x1F918;",
  "&#x1F919;",
  "&#x1F91A;",
  "&#x1F91B;",
  "&#x1F91C;",
  "&#x1F91D;",
  "&#x1F91E;",
  "&#x1F91F;",
  "&#x1F920;",
  "&#x1F921;",
  "&#x1F922;",
  "&#x1F923;",
  "&#x1F924;",
  "&#x1F925;",
  "&#x1F926;",
  "&#x1F927;",
  "&#x1F928;",
  "&#x1F929;",
  "&#x1F92A;",
  "&#x1F92B;",
  "&#x1F92C;",
  "&#x1F92D;",
  "&#x1F92E;",
  "&#x1F92F;",
  "&#x1F930;",
  "&#x1F931;",
  "&#x1F932;",
  "&#x1F933;",
  "&#x1F934;",
  "&#x1F935;",
  "&#x1F936;",
  "&#x1F937;",
  "&#x1F938;",
  "&#x1F939;",
  "&#x1F93A;",
  "&#x1F93C;",
  "&#x1F93D;",
  "&#x1F93E;",
  "&#x1F940;",
  "&#x1F941;",
  "&#x1F942;",
  "&#x1F943;",
  "&#x1F944;",
  "&#x1F945;",
  "&#x1F947;",
  "&#x1F948;",
  "&#x1F949;",
  "&#x1F94A;",
  "&#x1F94B;",
  "&#x1F94C;",
  "&#x1F94D;",
  "&#x1F94E;",
  "&#x1F94F;",
  "&#x1F950;",
  "&#x1F951;",
  "&#x1F952;",
  "&#x1F953;",
  "&#x1F954;",
  "&#x1F955;",
  "&#x1F956;",
  "&#x1F957;",
  "&#x1F958;",
  "&#x1F959;",
  "&#x1F95A;",
  "&#x1F95B;",
  "&#x1F95C;",
  "&#x1F95D;",
  "&#x1F95E;",
  "&#x1F95F;",
  "&#x1F960;",
  "&#x1F961;",
  "&#x1F962;",
  "&#x1F963;",
  "&#x1F964;",
  "&#x1F965;",
  "&#x1F966;",
  "&#x1F967;",
  "&#x1F968;",
  "&#x1F969;",
  "&#x1F96A;",
  "&#x1F96B;",
  "&#x1F980;",
  "&#x1F981;",
  "&#x1F982;",
  "&#x1F983;",
  "&#x1F984;",
  "&#x1F985;",
  "&#x1F986;",
  "&#x1F987;",
  "&#x1F988;",
  "&#x1F989;",
  "&#x1F98A;",
  "&#x1F98B;",
  "&#x1F98C;",
  "&#x1F98D;",
  "&#x1F98E;",
  "&#x1F98F;",
  "&#x1F990;",
  "&#x1F991;",
  "&#x1F992;",
  "&#x1F993;",
  "&#x1F994;",
  "&#x1F995;",
  "&#x1F996;",
  "&#x1F997;",
  "&#x1F9C0;",
  "&#x1F9D0;",
  "&#x1F9D1;",
  "&#x1F9D2;",
  "&#x1F9D3;",
  "&#x1F9D4;",
  "&#x1F9D5;",
  "&#x1F9D6;",
  "&#x1F9D7;",
  "&#x1F9D8;",
  "&#x1F9D9;",
  "&#x1F9DA;",
  "&#x1F9DB;",
  "&#x1F9DC;",
  "&#x1F9DD;",
  "&#x1F9DE;",
  "&#x1F9DF;",
  "&#x1F9E0;",
  "&#x1F9E1;",
  "&#x1F9E2;",
  "&#x1F9E3;",
  "&#x1F9E4;",
  "&#x1F9E5;",
  "&#x1F9E6;"
];

export default function Emoji({ onClick }) {
  function createMarkup(emoji) {
    return { __html: emoji };
  }

  const emoji_style = {
    display: "none"
  };

  return (
    <ul className="emoji-list" style={emoji_style}>
      {emojis.map((emoji, index) => (
        <li key={index}>
          <span
            role="img"
            aria-label={emoji}
            onClick={onClick}
            dangerouslySetInnerHTML={createMarkup(emoji)}
          ></span>
        </li>
      ))}
    </ul>
  );
}
