import { DiAndroid, DiApple, DiBootstrap, DiCss3, DiJsBadge, DiMysql, DiRuby, DiYahoo, DiReact, DiUnitySmall, DiWindows } from 'react-icons/di';

export const Logos = () => {

    return(
      <div className="relative w-full h-40 overflow-hidden">
      {/* Sliding logos container */}
      <div className="flex animate-slide-in-out">
        {/* First row of logos */}
        <div className="flex space-x-8">
          <a><DiAndroid className="w-10 h-10" /></a>
          <a><DiApple className="w-10 h-10" /></a>
          <a><DiBootstrap className="w-10 h-10" /></a>
          <a><DiCss3 className="w-10 h-10" /></a>
          <a><DiJsBadge className="w-10 h-10" /></a>
          <a><DiMysql className="w-10 h-10" /></a>
        </div>

        {/* Second row of logos */}
        <div className="flex space-x-8">
          <a><DiRuby className="w-10 h-10" /></a>
          <a><DiYahoo className="w-10 h-10" /></a>
          <a><DiReact className="w-10 h-10" /></a>
          <a><DiUnitySmall className="w-10 h-10" /></a>
          <a><DiWindows className="w-10 h-10" /></a>
        </div>
      </div>
    </div>
    )
};
