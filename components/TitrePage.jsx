import React from "react";
import { usePathname } from "next/navigation";

const TitrePage = () => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/" && (
        <h1 className="text-3xl font-bold tracking-tight text-white">
          NOUNOUS
        </h1>
      )}
      {pathname === "/statistiques" && (
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Statistiques
        </h1>
      )}
      {pathname === "/book-bebe" && (
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Book-bebe
        </h1>
      )}
      {pathname === "/setting" && (
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Profile
        </h1>
      )}
      {pathname === "/comments" && (
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Comments
        </h1>
      )}{" "}
      {pathname === "/admin" && (
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Gestion Administrateur
        </h1>
      )}
      {pathname === "/histoires/Les-glaces-delicieuses" ||
      pathname === "/histoires/Groudou-le-porc-epic" ? (
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Histoires pour enfants
        </h1>
      ) : null}
      {pathname === "/nounou-update" || pathname === "/user-patch" ? (
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Settings
        </h1>
      ) : null}
    </div>
  );
};

export default TitrePage;
