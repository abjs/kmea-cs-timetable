import { TooltipComponent } from "./tooltip.component";
function App() {
  const meetLink = {
    cg: {
      name: "Computer Graphics",
      shortName: "cd",
      link: "https://meet.google.com/jen-rhoj-sgi",
      courseCode: "CS401",
    },
    ml: {
      name: "Machine Learning",
      shortName: "ml",
      link: "https://meet.google.com/hvs-bzty-zwh",
      courseCode: "CS467",
    },
    dc: {
      name: "Distributed Computing",
      shortName: "dc",
      link: "https://meet.google.com/eni-edih-fup",
      courseCode: "cs-401",
    },
    pp: {
      name: "Programming Paradigms",
      shortName: "pp",
      link: "https://meet.google.com/cxh-pdhi-kzf",
      courseCode: "CS403",
    },
    csa: {
      name: "Computer System Architecture",
      shortName: "csa",
      link: "https://meet.google.com/gsc-cyqx-fss",
      courseCode: "CS405",
    },
    cns: {
      name: "Cryptography and Network Security",
      shortName: "cns",
      link: "https://meet.google.com/urn-pfbf-iiq",
      courseCode: "CS409",
    },
    sp: {
      name: "Seminar & Project Preliminary",
      shortName: "",
      link: "",
      courseCode: "CS451",
    },
    cdLab: {
      name: "Compiler Design Lab",
      shortName: "cd lab",
      link: "",
      courseCode: "CS431",
    },
    free: {
      name: "_",
      shortName: "_",
      link: "",
      courseCode: "_",
    },
  };
  const { cg, ml, dc, pp, csa, cns, sp, cdLab, free } = meetLink;
  const timeTable = {
    monday: [dc, cg, cns, csa, cg, pp, ml],
    tuesday: [csa, pp, cg, ml, dc, sp, sp],
    wednesday: [ml, cns, csa, pp, cdLab, cdLab, cdLab],
    thursday: [cns, ml, cg, dc, cdLab, cdLab, cdLab],
    friday: [pp, dc, ml, free, cns, csa, cg],
    saturday: [cg, csa, pp, ml, cns, dc, sp],
  };
  const AllDays = Object.keys(timeTable);
  console.log(typeof AllDays);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <table className="table-fixed sm:w-[99vw] lg:w-[80vw] ">
        <thead>
          <tr className="text-center">
            <th className="w-1/8 text-left">Day</th>
            <th className="w-1/8">
              <p className="sm:lowercase lg:uppercase">Hour 1</p>
            </th>
            <th className="w-1/8">
              <p className="sm:lowercase lg:uppercase">Hour 2</p>
            </th>
            <th className="w-1/8">
              <p className="sm:lowercase lg:uppercase">Hour 3</p>
            </th>
            <th className="w-1/8">
              <p className="sm:lowercase lg:uppercase">Hour 4</p>
            </th>
            <th className="w-1/8">
              <p className="sm:lowercase lg:uppercase">Hour 5</p>
            </th>
            <th className="w-1/8">
              <p className="sm:lowercase lg:uppercase">Hour 6</p>
            </th>
            <th className="w-1/8">
              <p className="sm:lowercase lg:uppercase">Hour 7</p>
            </th>
          </tr>
        </thead>
        <tbody className="h-[50vh]">
          {Object.keys(timeTable).map((day) => (
            <tr className="h-1/5">
              <td className="capitalize">{day}</td>
              {/* @ts-ignore */}
              {timeTable[day].map(({ name, link, shortName, courseCode }) => (
                <td className="text-center">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <p className="capitalize text-blue-600  hidden md:block">
                      {name} <span> {courseCode}</span>
                    </p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <p
                        data-tooltip-target="tooltip-default"
                        className="capitalize text-blue-600  md:hidden"
                      >
                        {shortName} {courseCode}
                      </p>
                    </a>
                    <TooltipComponent message={name} />
                  </a>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
