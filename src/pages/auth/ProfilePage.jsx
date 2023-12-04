import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { useAuth } from "context/AuthContext";
import { getProfile } from "api/profile";
import ResultCard from "../../components/Widget/ResultCard";

function ProfilePage() {
  const { user } = useAuth();

  const [data, setData] = useState(null);

  useEffect(() => {
    const setUserProfileData = async () => {
      const dump = await getProfile(user.id);
      setData(dump.data);
    };
    setUserProfileData();
  });

  const avatar = "/images/male_avatar.svg";

  return (
    <>
      <main className="h-full">
        <section className="container mx-auto max-w-4xl rounded-xl shadow-md my-8 bg-white md:px-4 py-4">
          <div className="flex justify-center items-center my-4 py-3">
            <img
              className="rounded-full border border-emerald-400 p-[3px] shadow-lg lg:h-52 lg:w-52 md:h-40 md:w-40 h-32 w-32"
              src={avatar}
              alt="Avatar"
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
              Hola, {data?.username}
            </h2>
            <span className="py-4 font-light">
              Registrado en: {dayjs(data?.createdAt).format("DD/MM/YYYY")}
            </span>
            <p className="text-xl  text-gray-700 py-3">
              Aquí estan tus ultimos resultados
            </p>
          </div>

          <div className="py-3">
            {data?.exams.map((examTake) => {
              return (
                <>
                  <ResultCard data={examTake}></ResultCard>
                </>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default ProfilePage;
