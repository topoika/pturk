import Image from "next/image";
import Link from "next/link";
import Footer from "../components/home/Footer";
import SocialAuthButton from "../components/home/simplecomponents/SocialAuthButton";
import AuthHeader from "../components/universal/AuthHeader";
import AuthImage from "./../public/static/images/auth_page.png";
import Constants from "./../components/constant";
import Router from "next/router";

export default function signup() {
  const registerUser = async (event) => {
    event.preventDefault();
    let _user = JSON.stringify({
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      password: event.target.password.value,
      birth_day: event.target.birth_day.value,
      birth_month: event.target.birth_month.value,
      birth_year: event.target.birth_year.value,
    });
    console.log(_user);
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: _user,
      };
      const res = await fetch(Constants.BASE_URL + "/register", requestOptions)
        .then((response) => response.json())
        .then((data) => data.user);
      console.log(res);
      if (res.length > 0) {
        Router.push("/");
      } else {
        alert("You have enter wrong details");
      }
      console.log(res.length);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex  flex-col">
      <AuthHeader />
      <div className="flex justify-center items-center content-center w-full bg-white">
        <div className="flex w-5/12 justify-between py-[100px]">
          <div className="flex flex-col w-5/12 justify-start">
            <div className="flex flex-col justify-center items-center w-full">
              <p className=" place-items-center text-red-700 font-bold text-xl">
                Sing Up for Pturk
              </p>
              <div className="flex justify-between items-center">
                <p className=" place-items-center text-black font-medium text-base my-[3px]">
                  Connect with great local businesses{" "}
                </p>
              </div>
            </div>

            {/* SIGN UP FORM */}
            <div className="flex flex-col justify-start">
              <p className=" place-items-center text-center my-2 text-black font-normal  ml-2 text-[13px] ">
                By continuing, you agree to Pturk’s
                <span className=" text-[#0073bb] mr-1 hover:underline cursor-pointer">
                  Terms of Service
                </span>
                and acknowledge Pturk’s
                <span className="text-[#0073bb] ml-1 hover:underline cursor-pointer">
                  Privacy Policy.
                </span>
              </p>
              <SocialAuthButton />
              <p className=" place-items-center text-center my-2     text-black font-normal  ml-2 text-sm ">
                Don’t worry, we never post without your permission.
              </p>
              <div className="flex items-center my-2 ">
                <div className="h-[1px] bg-black opacity-30 w-full" />
                <p className="mx-2 text-base font-normal text-black opacity-70">
                  OR
                </p>
                <div className="h-[1px] bg-black opacity-30 w-full" />
              </div>
              {/* Sign in form here */}
              <form onSubmit={registerUser}>
                <div className="w-full my-2">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      autoComplete="first_name"
                      className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                    />
                    <div className="w-[10px]" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      autoComplete="last_name"
                      className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="password"
                    className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    name="address"
                    autoComplete="address"
                    className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                  />
                  <div className="flex items-center">
                    <p className="text-right font-semibold text-black mr-[4px] text-sm ">
                      Birthday
                    </p>
                    <p className="italic text-right font-normal text-black opacity-60  text-[12px] ">
                      Optional
                    </p>
                  </div>
                  <div className="flex my-2">
                    <select
                      name="birth_month"
                      className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                    >
                      <option value="">Month</option>
                      <option value="1">Jan</option>
                      <option value="2">Feb</option>
                      <option value="3">Mar</option>
                      <option value="4">Apr</option>
                      <option value="5">May</option>
                      <option value="6">Jun</option>
                      <option value="7">Jul</option>
                      <option value="8">Aug</option>
                      <option value="9">Sep</option>
                      <option value="10">Oct</option>
                      <option value="11">Nov</option>
                      <option value="12">Dec</option>
                    </select>
                    <div className="w-[10px]" />
                    <select
                      name="birth_day"
                      className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                    >
                      <option value="">Day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>

                    <div className="w-[10px]" />
                    <select
                      name="birth_year"
                      className="w-full px-2 py-2 mb-2 border outline-[2px] rounded-sm"
                    >
                      <option value="">Year</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                      <option value="1919">1919</option>
                      <option value="1918">1918</option>
                      <option value="1917">1917</option>
                      <option value="1916">1916</option>
                      <option value="1915">1915</option>
                      <option value="1914">1914</option>
                      <option value="1913">1913</option>
                      <option value="1912">1912</option>
                      <option value="1911">1911</option>
                      <option value="1910">1910</option>
                      <option value="1909">1909</option>
                      <option value="1908">1908</option>
                      <option value="1907">1907</option>
                      <option value="1906">1906</option>
                      <option value="1905">1905</option>
                      <option value="1904">1904</option>
                      <option value="1903">1903</option>
                      <option value="1902">1902</option>
                      <option value="1901">1901</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="h-fit justify-center flex my-1  w-full items-center bg-[#E00707] hover:bg-[#ee5656]  rounded-sm text-[#ffffff]   px-4 py-[10px]  text-base font-bold cursor-pointer  "
                  >
                    Sign Up
                  </button>
                  <div className="flex justify-end mt-1">
                    <p className=" place-items-center text-right font-normal text-black opacity-50 ml-2 text-sm">
                      Already have an account?
                    </p>
                    <Link href={"/login"}>
                      <a>
                        <p className=" place-items-center text-right font-normal text-[#0073bb] hover:underline cursor-pointer  ml-[2px] text-sm ">
                          Log In
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-between">
            <Image
              src={AuthImage}
              width="382"
              height="342"
              objectFit="contain"
              alt="Pturk Logo"
              className="align-center"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
