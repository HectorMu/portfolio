import React from "react";
import useLanguage from "../../../../hooks/useLanguage";
import "./skills.css";

const Skills = () => {
  const { currentLangObj } = useLanguage();
  return (
    <div id="skills" className="skills mt-5">
      <div className="skills-header mt-1">
        <h1>{currentLangObj.skills.header}</h1>
      </div>

      <div className="skills-cards">
        <div className="skill-card shadowed">
          <img
            src="https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg"
            className="image"
            alt=""
          />
          <div className="title js">
            <h5>JavaScript</h5>
          </div>

          <div className="body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique, laudantium. Blanditiis velit, sapiente eaque rem
              veritatis aperiam eos reprehenderit provident.
            </p>
          </div>
        </div>
        <div className="skill-card shadowed">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            className="image"
            alt=""
          />
          <div className="title css">
            <h5>CSS</h5>
          </div>

          <div className="body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique, laudantium. Blanditiis velit, sapiente eaque rem
              veritatis aperiam eos reprehenderit provident.
            </p>
          </div>
        </div>
        <div className="skill-card shadowed">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
            className="image"
            alt=""
          />
          <div className="title html">
            <h5>HTML</h5>
          </div>

          <div className="body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique, laudantium. Blanditiis velit, sapiente eaque rem
              veritatis aperiam eos reprehenderit provident.
            </p>
          </div>
        </div>
        <div className="skill-card shadowed">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADsCAMAAAA/3KjXAAAAeFBMVEX///+MyEuDxDeGxj+FxTvj8dfP57rV6cKKx0f0+e/d7s72+vKIxkOCxDWBwzKKx0ju9uf7/fnH466q1YCTy1jl8tqj0nXF4que0Gzp9N+QylK53Jjw9+q/36KYzWHB4KXM5bWw2IrZ7Mmm03m225SXzV+u14Z7wSRtZccNAAANMElEQVR4nO1da3fqKhBNAE2MJFHjIz4bn+f//8ObaGuVxwCRQLrW3R/adU6tZUsYNjPDTBC4wS6JhsMo2Tn6c04QFQQRXKP+VkS+R2MH0z3BNHyCYrL3PSQLmBEcMsC48j2qD3EKOVJ3YpvE98g+wLpEuYhVGOaonPgeXUuMj1ksJtUgzo5T3yNsgy9E5aTuxgOtfI/RGFEsXFTMEgtPvsdphPWVSBYVs8TIYe17rNoYFakWqQZxdhv7Hq8e9qliUb2Dpl++R6yBIdZYVO/AtO+CajAnpqQakOvC98gB7Jb6i+odeXoe+R69BNMLtP3mtYSHzCPNtr4JCDEjkKUg80EQJBto3fVRAatGPHy8rMIQ974p4IlU096fr/TlhLXNAGI5WvZHAU9BTZunxduGuztDdiXOLj1RwCtI04rk0eAK7QIUzXywYABrWhwLd9ohBX/JuwJeHECjLT96fEEKy7MCHoOaFj4ojm/wIdOfAgY1rfpYv4Zn2pMChjWt1hYkceD8vIUHBQxrWkoqvbcBpUnuWgHDmrbee7TfSSEkXSpg1VCWRp723RJWKK4UcKXWtGZIwAf6qSc7hULT0lZjgM0PmXetgA00rRm28GZh9lwbAta0MaNpzQC7q7pUwLCmRZ8KngXoXKSkGwWs0LQ25KnqT9hfYgqlY8udrnggSrsKuNa0joIfiuWbHS0q4A81rRkUxhbZUsCKM599t4piaxSfTA2h0LTdOMFAIVMr4E+XGKxpu3NZqmTnJztkMN36k9eKD7S9nlFp2quxpjUD/Pi3VcAqTevg6AobqxZnBaWmdeRogLcWw5OdclN05xZSCQETBWzsp+0S6wP43Oh6TYIo75nLVeGg0tIDKk3rxUG+ArdntXqz+SjbBLw9q7S2QtN2evRWQKWA5Scj1TbhOVSo2Ehz8UbazaZuFRXkoBJb6JsfTWsIMETLe5NHG3A3L3qTNDECQ7R4/h7PxXI749zBrwDooIrpC68xlr/QzmHUKiLAtMX5r6m/SufKnuvAKoAQLS1/XrSXkbfr6LEJIERLvnewXSb+eb+zn9elbImlj6koxBOKN77TCBSQKWB6bH46Ek5WVy5vq5CEaNPGaqwEnPuTogNDrIDvTr4r94gaH6Y9QuSgimtjOOWewTauD48QaNm03rSZ/8zbhUl9YkiZCSOT4PS+tPLwTyyqd0yZBYaTYPhOC/dOKumg4kgwtEivZK0uEqKi9afMxQ/+p+UA4916MUjuGKwnH6jqftCaDobb85ykCCFSA+PmK0Epnp+31aAFPf+0RtFxkxJMY5H+zmOKSZoXleHRwT6tfXHH+Vx/ualiaZOveYrZzZMHxSi+mAzEOq2S0Bpxg/o7WUKvHV5TwLvAUiN0r61MbdNiFWUmXxhfWJ/TN7NsqbmL2qY1Ru8jQTLPW8VfFtdAnOrlzXiitZ63IfUgVmiIVD+0vrKWt9UaUKz2/XuhtWx1sfAXmdKp54HWdG50sVUEcuwdrSnk3bfFyz2tqwVW9fvCz6FzWkVbE8ggA+2Ga1oR83MWeZ43AqX+puJFIDvvmNZUagNpU28nxZvDoaxxOMzjWtA3Clj6C5Auc0xrK1xYea1ki9VpzQqtXX1eOaSyXAUEPIZuafE+yBoxms8gDZtcxOIx3/SF1pfAXqBSLV8jYXSeyJ1ibmnxhiCmelkQkSDqm8/7QYt1GNes5rrO1emBX2JIOs9Oae3ZkeWxgcu45HhRqdZwSqtkHyTImPHYcI8w6QUtdivOr0bvPUk5WrLBuaQ1YWmZ5sxzoXosU4YuaSWsxUCmEXZ2dcWl5IUuaUXsh50asuLjv7LF5ZLWkB0UMqU1ZVeXzAPkklb1Ma3gzNhSWZjK72wZ57mxb4ElqSJe15aGC4kBa0xluZouaQ1YSxiDrmwhGH896QGtHXcy1k7Ff+L0D7+AyM4mXlVGbeKNc2MnwxdIk7D8asIm6bLqIkHCKS3RKTLH2XJoPfXIKa212EETY0SLamBz1nyfjn/QxFI3t9XJUh6mf1/GL/LGqZZuzvvhxxW6HXueuBOTgFwTBUdpuLzMTuu2D6ZjP6EoBVPOrp47XF5mLebOtbN6DlxPEuI+d6TcRkarzjWtkcIHLyeHyHmmfVnRecRkIMlG1+GGEb5FWsvNfXxr8EncuN4IsqVGhqOHIOuafha4qydtqzqo+QiJTz8NiYdUdSnETwJDZF4ZmSWWgrcNfGXR7JFpZhALcgAmzFtyUDALwXoOasRYbu/90apt4oUSddKdHHkmHZtPWjUW+0NKgAuLCmSy+fJMq8Y0+TpjafonjBxLNmf/tB6/NqguyzBrOuwY0ZOF+3tC6xujRTTbFgeaavNDYi9Nv2g9sVucZtvz5p6ZAZKTxI97SutJL5kd56BREY+v57QeGMyWSLYViOPHf4JWg8E2J8I5w6JX/xlaNQbCAlbCkOZfoiXOXBYGTRzSmiwWi8EDi0VblxKfjkhFbnx3tIqMvEAu5xRYsgtMGE1yRit5dxHmcUtaY9bVKNy5nNFiQ5Fp29tZ3HSJTGGivBvZEa3WF6i4xClRYN0ZLebeb4jblgjQyhdwRosNHLeIGz+gld3hjBaX8GScQvMNbra8ri0uWNL2njabxSy2hK5oBSEjfPJDO1oH5n3is1daN86CtbKF3L4lVhnOaHFLHcggBsBFyIQPsztaOy4SiVsULOOvPaSioJ47WoKqKal5JY4ll8UsTKRxSIuzzDUv0z35yAt44dVmh7RE8XCyNDmPjQ6CT0YYfHVIK7gIfO5xutXWvHtBvU5Jtq5LWpxtvoOmhU5a4WQrvKgsyaR3SUtWm40SVFRQtHuc7Dfiyr6y1GqntDil8csMk2x+3q6Gp2SxXk92u91oN1kPkqjaH0uMpD7QTJLW4JbWGgrz3xNMmkoZiCD0qJxR/5vK79vVw5VVeHBLK5i1S8uQgMqy+13TEmw87RGH0mG4phXcPo3y/7Ki8q3BOa3gYuk5pCEUEndOK6g+SqN5jvQA3jt2TytYg3XPtZAryhX7oNXULm4dBX8MM1SMyg+tYFJC9dgV0Gjs4IlWEAxKs37wP8hxulXHJTqnJTdXkwsyzsigKFzpBFs80qoRFal+Hk1OCT5qjsYvrWYA22umCuc3qeQku+71h+KdVtAUhpsdr49UDNqUyvhlE9/Tq0m6KVaJUaCvD7QeaFJN9sdzed3Qu4KvT43zsrh8DZMWNxnUtMyKZLKZ0/q0rEJJy/DKc09orThabCCKGj0D/aA1YYNpCX8byahcdS9obVlfEKmnhjuY63cT6gWtCnPypYmlHQRX/bS7C3qnJerZco98zkRX/XQL93umJe6wc0+0EZb30e3c6ZWWrPnZI7p8FEtrrT6r7N1il7Rkzc++A05ip3Lzc0k3oRewVXTc0ZL3GvspSzaTeYfU/d7YaE/qqOw60BkOPaNofJGeH6g6TrM3prPuGQVgF5OQvoTMN/LzHdhPk42k5nIPpUVAzc/oa4R6HAIncqCbO1umo3WujAGgDkE1q7dVMBUE/n4hayrBVR8UZhdYBdz8jHBeekVXWVELkAEfzO+4pcEO7L4Vi0q6wj3x4uzC2o6I3xiMSx6ZAeyVJu2+ksAdm9Pb66O4Owuc621zPLUg0LQvgLqvwL0IKaHHqKkBOV5UQrcfZXvLWYSiD6GioyDYOfIeHUVp414Ri7HO2mqoGvoqmzqPC2hVgoDKWH4ERUNfvRbc62vLUFs37dLtNfQFdzz5H6CdkFL0zzXqKKhYYkIAJUfbQ9HtWOfw9Aq4la4Iccv0TngUnzTOFQJufMwjtd8JVNHQt2VHwRO4VTDIrDf4gzdRfTcSD7Bl7ftc2e7wB2taE6efCF+QcX2ZK8Olq4KoZd0v+Fa5xphu1UYxTi0/gWCLbUsdBWtiYPmEnJR2rUUFFjWw11Fwuoqlfykmc7tTpdC0djsKJkciCPtSnJ3tdhj/WNMaY7A/ZOgRGW36HGH9wj7aUGjaTEvTtsD6tLoUy7Jc3rZtqmcpYEvT9gpRDC6qsOcNfcVYgFrNWNP2A7CybqVpe4BuNK1NDMubqSkZgsrzE01rC8mGxFSR08hAoWm78iSYjPB72avcWy+ANa3hJ9QJkgN6Lnsy1/KtiZtmPxdVevbdJXtabd7KduQ6Xi5Ji/PnR+O7P+zpzIt8ZS6qStN67rw8KVKxkxcUBu41rRkG/6RPknzHUWnam5+UsFdAVRUlx3NY06J+aNoVFHYSOFOi/G9o2hEYJGQsGux/7JemBaVCvf88nR1wQCY2yvpzgSEUK6Q/Zfv7r2k5gIqh0VPTqjM/bZfYgVsRRggOk1a+xy8FLBwA9EHTQpjpObff8WpTegpYPwhBrr41rQ4MA2PeNa02YNfYGzTunPUImrHnXmhaE+ikd/xJPy3segn7pGnNAOspZDss6w5SPdU/TWsEsZ7K0bKHmtYIScg6b3Iy76emNUOVv8Qxc4pCq2FSj0iOeUruXdzS/PIXhJI2xotTFJ0Wrjbf/wBbvuQ0YEejzgAAAABJRU5ErkJggg=="
            className="image"
            alt=""
          />
          <div className="title nodejs">
            <h5>Node JS</h5>
          </div>

          <div className="body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique, laudantium. Blanditiis velit, sapiente eaque rem
              veritatis aperiam eos reprehenderit provident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
