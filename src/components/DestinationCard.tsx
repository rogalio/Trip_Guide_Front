import React from "react";
import Batu from "../asset/batu.png";
import Kuta from "../asset/kuta.png";

const DestinationCard = () => {
  return (
    <div className="max-w-5xl mx-8 mt-10 font-DmSans md:mx-auto md:mt-12 md:px-6">
      <h1 className="text-3xl font-bold text-center md:text-4xl dark:text-c8">
        Search a best place in the world
      </h1>
      <p className="px-2 mt-4 text-sm text-center text-c4 md:text-base dark:text-c5">
        Whether you’re looking for places for a vacation. We are here to Guide
        you about the details you need to check in and ease your trips in
        advance
      </p>

      <div className="flex gap-4 pb-8 overflow-x-scroll md:grid md:grid-cols-4 md:scrollbar-hide ">
        <div className=" flex flex-col gap-2 w-[250px] min-w-[230px]    md:w-[220px] hover:bg-c7 dark:hover:bg-c2 hover:shadow-md  md:h-[180px] mt-6 p-4 border-c6 dark:border-c3 border-[1px] rounded-lg shadow-md">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src={Batu}
            alt="city"
          />
          <h3 className="text-lg text-c3 dark:text-c7">Batu, East Java</h3>
          <p className="text-sm font-medium text-c4">82 destinations</p>
        </div>

        <div className=" flex flex-col gap-2 w-[250px] min-w-[230px]    md:w-[220px] hover:bg-c7 dark:hover:bg-c2 hover:shadow-md  md:h-[180px] mt-6 p-4 border-c6 dark:border-c3 border-[1px] rounded-lg shadow-md">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src={Kuta}
            alt="city"
          />
          <h3 className="text-lg text-c3 dark:text-c7">Kuta, East Java</h3>
          <p className="text-sm font-medium text-c4">73 destinations</p>
        </div>

        <div className=" flex flex-col gap-2 w-[250px] min-w-[230px]    md:w-[220px] hover:bg-c7 dark:hover:bg-c2 hover:shadow-md  md:h-[180px] mt-6 p-4 border-c6 dark:border-c3 border-[1px] rounded-lg shadow-md">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhUYGBgYHBkYGhgYGhoaGBkcGhwZGhocGBwcIS4lHB4rHxwZJjomLDAxNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzUrJCs0NDQ0NDQ0PTQ0NDQ0NDQ0NDQ0PTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEIQAAIBAgQDBQUFBQcDBQAAAAECEQAhAwQSMQVBUSJhcYGRBhMyodEUQlKx8BUjksHhFjNTYoLS8XKisiRUY3OT/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAkEQACAgICAgIDAQEAAAAAAAAAAQIREiExQQNRYYETIjJC8P/aAAwDAQACEQMRAD8A9SNKhNCahsJNCaBoGgDNNLUjQoB00JoRRigBNKiFqRcOgIgtELU7IALUwITUsA01IiCiuB31L7qo2UY4AFVWerbITzqI4FEwQaqIp74dBEq2QKJRKRyqwiRT/d1LKUYqRVPSrJQUQKtkIlSjoFSUqgItFKpKVARthUPdVaoMQBJsBuaAqJhGPM/IkUThGo+E5pcRW0kGHfmDYuxBtyINX5qWCp7k0Tl6szRFWwVly9OGXqwKbMVAR+4AqJVPOpmegWNAIKKDCmQakFADDqQiitBjQoKUUlFGoBumkFFPigRQBFAtSmhVA2KNGhQBpUKIFAKlRilQD6o8aRmwHCkAlee0SJ+U1eqDOfA3gR62o+CLk5b2Pwz71yIAC3Egze0WrsTFc57LkamAj4QeXXuroWqRdosv6G0iaRoFqpBwFAiiAaJFANigDRK000A6gRSpUAqJNKlQCmiKQoTQCJoGiTQqFBSmlFKKAM0qFKgCBTwKalJ2oQE0qZPf8qVQ0TTUOePYbw/mKniqnEj2G/WwJ/lPlWnwZXJkezshjv8ACo5Hm/T8v61vk1gcCAD8vhGyxzcee+/j1roqzHg1Lkj0mjop5oRWjICaVGhQCoRRpRQAomlFI1AClRihFAKlNKKQWhRUqJoUAKFONCgBSpUaAFIijSqFG0qNKoCWqXEvgIBuZi03gnb5jvAq5VDizwh3+Ftt9gLd9/lWnwRcmPwPWH7b6haIU2ltpI/QJ6V04rmchiQ/3vhJ7rMCInzjlc10xrMWalyGhQmhWzA6hQoigFRoUqgDQNKgTQCpTSJppoUdNKaZNGagHTSmmTS1UA+hNN1UJoB9GmhqWqoUJpGm6qJagG0qM0qAlrM4y3ZIv8PISbm8W3hT61pVgcezqodJJkyBAmBpNz5keY7qS4EVsp5RpdbnYg2MXkbkWuZHK1dThtIB6gH1FcVkOIoWl3I7I3UR8YOkb9IjoTXYZYyo7pHoYpFUWRNFKlSrVmBURSNCahRUqE0poAzSihNKaANKhNKgETQmhSmgERQijNCoAihFKhQoTSoTSmgFQozQNAKlSpUBMa874o7s8s4eZIjVAk3tqtvXeZx4Q99vI7/Ka5tMqC+ISiEDSAIAE2U7fiDK08ppeyxRzSggyOz39oRJjk1dh7LYrlWV3DRpIFyRIgySSeQ7vWsfhuAGLKVVrtFiNldhFtiQNvQc9bgxClSFUTCsQACdw2w/GG7oURVbK0dHNCaVKhgU0KVKgFSpTQpYoVGhSmoUNKhNKaAVKKVKaWARSijQoBUKVKgFQijQoBUKVKhRUqVKpYo5rN42m+s2HJuvn4fOs7BzyhGGpgWIt2tlYEGYgWA/hqjiYZJvJ57U33A6H0rdo1iy9ks7ocMX2YtcTHxCbDpNPwc6AzKGtJVbQCpvFx1B6RqtWY+X7j6Dvoe5m8E+Q+lXRGmdjgcSdgO0pPlPjUv7QcdPOK5bh2IUeSSQREbCeW3jWviY8GBqYRJgc56dIqNpDFl/F4m4023YDbeQaCcUcsw6BeQ5zWJnsYgAyLPI25c5FDBzIGI+q5Kj1A/K9ZyV8Fw0b54k3UelIcTbqPSsI5hotM22+lDDxHMyD3TI9K1fwTH5Og/aT7wPQ/WkOJt0HofrXO4j/dJPI/Ko3zQG9xa2+1S/gYnU/tFug77Gom4vEgxI5c790zWHhY5lQCe2AZ1EbibgVXzGYCwSZJM9SI5knwHrUT2VxR0icTZl1BezMTH5fOiOKTADAzOw6b1za5qQCD1i+1x/M0w5nvYefc3XwpslI6gcRtOoW7hSHErxqWubTPmCNU2IO3cP5imtmQFKnY29D/zS36LivZ0v7VtI/wDEx4ajYHxqueOf5T6L6b1gDOD4eVzst+dzudqu4lm0ALcEzB5R31HKuiqCNZeMdxHl9DR/a56DzsT86w8V4va5PUbGOtV8bFsDAkW9et+6opGn40dC/GG5KPnTDxhyJCjlyNYaZpVS5BaTaCbcr8qZiZsG+kXvtHznxq5fBMF7N39qYnd/D/WlXP8A2odB8qNLfomK9kuDlxMudoOkErM3kxfr6VLm8NN+ynLmOW8/rcVSZzqLLrFjIMm/ITbnypZbGC9p1MC0AT0uZ8R61ly2bUex/wBk2OtSB3t1Ntuhp75dDbULA7NHeOV6Ob4khECVFjJUddunI1nYnEgpAIO9vDvrSlbI46L+WyROoHEQr1Jh/SK0MNdInWk7Ek2N+gPjWSnFkIsG9KceJpEaWmY25/oUk/kJA4qwdlE6RB+EiNUiPHmKiymGgdGZ2kxqBiIYRPht5g1n51y7hhyuAQZNiDVZSdt2UnYEgCdSz5k71g0dc6lX7AGnlMz+VRviOPwz0Pf0qoMUMFU6dPRoA7jOi1yefOps9jMSAxQtHJ1O40kGDb0m9bpmBrYc6jBnboD5z0qXDyc7lhyuJE8gPG5qsHJvpibwFLCWjZgDuR3UmzTsBKSVAvJmBtPZ3t86jKaA4fcacQCICzA8I6iCOlUDl5BJDegAtud+tWvtqmCRG0m1zzEzc/0ovJee26NI7Ou45fCIjvrKk1yVqyouUgEltIAHIkgmLMB/KdqZjJhmNLkmDMqRfnHdvv1rSGHhhp0PYEEEOwve0ju+YoacODGEwtE6H8NtPSn5O9jAhy/ClddSP5N2YNtyJ/UVVbhTj4oUSZLGNvHlWiWUXRHVmiToc2AgSIiYEXqF8DFaW1CwtZlPmP6U/I/ZMEVRl0UmcRGIHJ0j0N/lzp32ok6tabEXI22iJpr5NmB1fe30qRy5SLU1eGhm+IjnvY3JgfM+VatPlin0EZrUCDpt3jn0qNnBtqTcbHaevrFSDLODEYcbXYA2Ut13gE+ANOfWis37sGOTKZmGNjz2IFV0laCb7Kz4MSJBIJFg1yN4t89qkw0TsnEPYkAgG8VQwc7ilwSNakzC+8DDcdkgQvhWk7qXZhhYhBjtEQSecqbedE32HQ4+5/Enph/76VV/dr/gYnqv+6lV+yWV8txVm1surSuns9lYkEbA3kwZ3EVCvvnMHFA1AHtvzJkabGLhbd1UcPDwkbQwYtqZZWdwREg7VuZXK4ZVu2gM6YLyBYRba351ydJ6R0ptbKf7KxSn96Hj7qwbR96Ui0VKOHmQHZSwsw0tqFrGIgDu76GHhl3YI+G8qYKtJNx2TO9j+VR42QeYdABJliQbzf4bkzvHPetWmZSaHYmVIPZEr12E8wOsW9RTjk5JQITYMTpcksByCn8J52vtUqcLRkVEK2JJIDw57I3IABgAeVPweEurQGg6Y1LqECwImbWCiPpUyRaZX+yaApZGUidJdHMg7ydW5nlPrU+RLILdoySB7u5mTEBh13jlU2bygxAmFi4kMgOkg9pgYktJvcL6UcLK4KEQg7IlTeViT4km/mTao3qwk7JcHGcg68PEIO4OHcENyA3WqGazhDa0WEkDtYcEC4JDHckx4Vr5fPuFgyRBAdpVpECSGG25rHTRqKPoYATeNRhezfnH0rKkrNUyMYxVNDMwAlgGgkA8+cjxPWpvtSh1LO2gJM2UyTA+ECQe+djVDF4jgpDBQ8hVghOypLQQO60+NVcvxtWdQU7WIQB2V0rJ0mRy+FTY9etuhk2MdkYvCmSQAC6ASdQUkBhEnTFudNzuK4zBRYVMPTIdUJIgxLTMG3eYqg2LocK2GoAtqRxJOkhezqm7aeX1rd4coxQdUgiFsdok2J3E3qcck5Ge9cEyuEoUFSSBb7wW72vvP0NJMRlaGCQNUsNLOhnUogA8jNu7rWomQQ/faeoInnzINY/G8qmEoJbEguFJDbWlTA5A9B0qaKV89xp0aEUMhHYeFIIgE/yt/Slk8++MAT2Ejl2VINpgnteXdVTFxlQT2yBzsWv2WIt4bdKsZHOa+yuIVMwNZJUgbRMiDaopJrS+w1vbLOC+I5AQqRsAVT5WtzJqfQ5GllBPMjQRaRBCgX3FMy2YlyhYs9yp0OoARtLAGBqEwN72qLCwtZY+8YsjaST1HS9rRRtLkKLfBRzudxR2V1oCbEgqTaIUbqLc+vlWd9lxHltDve5gm+/O81r5jHA7JYypgQNJVpJkHkZbcHnVThubVXgI0xYlWEnpJAEmeddE3WkYcVe2ZZfSYPZI3mxEeFWk4k4ABxXC9Va/lMitIcKTEdnxOxJkjUAWlrc+hAtUGY4Vh6joVSkWDPJnvIYc6qkjOEh9/wD3WN/+g+lKm4eQQgFkXUQJ7Q35/e60qZlwBxDKRi6nCkynwiBy5GmZxBrtMgiOgMAj+Vb+b4Wjgs5bVa+rkLdI+VZ+Z4SELAS0glSzwQYABNxI7orim2zs1SMT7K/99KgwwIVtLOFYBtontC4Nq3eHZoPhozYah4loSELfiB+Lkw35U7IcP95hGXKyXhRuNTKGvyOoOf8AVVfB0ImjCZ2CprDPeNRxCZJWG+L4Re45Cujdo5q0zT4W6s7YRWezqNhp3ECPM8q0cbBQRKahtA5DuvsOlccMbGDa1LmV3VdLEEG4Nuht3ieVTZXHzImUfEmSGcqGEkCNW5+KfAHuFTGuy3Zv+9ywUOcJWWAZ0XBFwQGEgc+6uRPFiHIZEZVeIiWgKWaJEEyJB8udauPmMQlgWcA6jpLcrMQR3Kyiqa8GdiScQKGawuSNfYA5feVj51v9ezm8uizj55H09vRpXSpVgoUGRA0wRYn1NVPtmAp0m9jDjEDAsfx/eF9NxJvzpg9nQSW97veNImRO3nhD+IdasJ7LoPvuYsNIiYmNuuhf4qn6I1c30RZh8II2l0k7dsTpi4v3c78qzs+hxANB7QgjexBGoSBt2bH5Vf8A7PIsjU0Cd7Hd957gPWmPw4JYE7kXcDqTzFTKAxmVc1m0dUd+07LsFk2AAupFyQdz+VavC+JhFhNfaMmV+GDA07wIE3nesXNocM+7VgVAfvgF2IU77AgVr5V9WEfhckHmQCdXdtRvRUtltOLBG+JgbiW0wNjG296sY3FPeoyEo1w2oSII8o/5rPy6EkH3eEIN2OosLMTFt4U+lMz2JGsPpCQsFRfYXJ1f5TYCuXmdReJpN3bGZYKWm4EXg9WbvsIEz3VbwVw31QCYtc7+prlBmeZJhomCQTfc/rrV3IZyNQm/nvXkUpw2uDSkm6NPCxPs5MMS33gNibWM7ybzWlwvNXcxZ21iPihhMEc4vf8AymuTzef1Ne8cufl61LwTOkYgA0k6XEk3MQdjIMiY8a6eJzk7l2Yc1F0jb4lj4euXA5bkz0HZiNxuSKjGBjsyAsdLGygjTF+zqA1RBI1VyXEM8zuzMSZmOR8/lW7w/jF1kjsLYnmSQI6TvVnPyxVrj/qJGUZSdnR5Hh7BrKqAgyVIckiLSRIvbyqZ8MiJkEi4AtN9jz5VzacRKW1QCxkSSZJmRYWvV7K8dgBNZa1289orkvL5rtpNHZONUbHuv+v1H1pVU/a+F+v+aVej8iIZfCOP4g1riLi4ibKyoSwiZDHn6zbvq1nfaBCqr7vU1ydcWERePHruK50YryTACgfc2m23ff5VmY+ZJkczHl/WtOeTuOjhKTiqs7R86jAuhKg20IQtgXbbrMCfDyzM1xvFVVmQGC8gpsJibmY38awMPELCOgNpi9tulW8LOM6EFge88ukd+/fXOTmt3osZp6NjL+0aEaWZg0SIdiJkdm0cpvPKnPxhARqJP8R6H7x7+lcvg5JWdl1HSsdoepHQ86s4WGEiWm7Wvz287Vq64Zc32bef4kbnDiIi6gk6gsxq6wB6VNge0zJcpqVVIIsCXDE79It51z75oxfkeVjI69+9RtiKee/8+nrWIuV7Dmujqcb2qlTpkGBzvJL8v+lgPIVDi8fZ0BIurBvEdudz/nPyrk8doawF4nrcn+lTpjjSRMkcv+d+VdXF8nN+RnRZTjWt2Um5JJIIgWcgAQfxUuKZkKSdR1XMfodK5XCUs/MEGfLn4VZzeGUJUqVMaiGkNfY36gi/fW8dFXkbjsnOKDLOd9V+t9zG/WtXhuYfSGUIqXJBEkxY7TFxO1cymYJEAiJgT9K0sB2dUQs8Mrq5USqnUukwogWk/wA9zWoxdbJGR1iZrUCNaDeY59hjbad/kKwfaXNaR6CbRspnusQPXuqPgmR/eYgY61WV7ZXtDUygiNpA7txvU+JkexrXD04byBhgkt90XUrP3Sf9VutVwiytya0cuMZjcm0kA+A2q1gZghp3PLyv/OtPNcFGJhYKYa/vFB1BiAAWgsCZNyREk+dV8zwDMYIVsRVVSYBD4bbkSTDWtF+dSXjTWjm1KLKBxj1vPnB+VR4eY0OIJ3BvtMn+vpV1OG4zwQjEad1BO9xECCbVIvDgusFW95JAWYYQzzbwjlSPjojTZnY6XIEHvHO296myIafLVY9I29a0v2ciqHdHNh2tGpQFIJgm20/OrGXRLFExIKaAVVVmAs3LibqT31pwuNBR3ZWfMagTAldQBJA0jmI57EedVtTN21FrSBeLfLnWtmMmdXZRmWWtBP4oHTeBY1Wx8HEZDhITrKiV7OqwggrM7WmsLxxSo6u+SlrXr86VVf7P5j8D+p+tKn4Y+zH7ehuBnwvZBj/Uf1FFxMkMJ6bfM71kspiD8Xna8VJhYzBiNiLXkifCn4q2iuV6ZYwcZpkfU7RtV7CzEN2iuwIMAARtYVlJmoad77i3jaNqtYQkiL/S9zVlCzmnRuJmgVKwFO0kRB+lZuYeGF+Uzy6U3MAjYqLXkjUd4sJsRTCjuIgczeAe79CucfDidG2xxcmVbfxpqvYQdib799SYmQcXEGQQYJPK52t0qyvCVWCxb8hcfM32rairMYyM7MvKie6PCKYQY1A3ttV7Fwkk+e+wAtEnvinMyAMAQASTpEnaBEDqZFdEkMWytkcMsbTJIgefd5861cXWyojgdo6e2IYKh6kkjc2gCouCasPXIJJaBpiIGx7XWT699aGZwnxHD6QpkxLdYsSLVG90dIw1Y3KcAZQuL2GmQoYSLTcjbwG1Q8JxSMRsLCzGh11EjS94s0E2JFbCZbH0qsiFFrEi/ftWSnC0wcY4zYihjqMagxlgQZAnyv1qJ87NYpVos4+BiFwjPBIksFkR2rwIvIIqTAwdIOI+YOGWgsSdM7gXLCTBIHjVHG4w0jSMRjYHSqgQGc2kjr+dYPGEfExC3unE82gn5GB61qKbdPRJSS2dL+0MFm0pmcfEboi29XIU+tHEwMMwWRyBt7w4em2w7JmPA1x+UxcXDNgQDvsCfODFXMPOkmWQnvnUf+6tOLXDMLyLtHS4WawUBUYmKOq4bgzboF7gPSpsM5ZySffi8ksq7m5sBJv3Vh4XEsOe0uIP+kLH510nCuMZJYlXJ7wBPqaw0zSnfonwuFZZ7q7H/UAQO8aZFOXKZXQXLkKpIJZ1UAjrIp+f4/lCpVUclgVtEibcvrXE8Wxw86MNySxMkWv4sSPSsqLb5N5pLo6RMzkndcLCXExXYwNBIWepZiojwmtlPZtrEYQBBBE4jsLXEgiD4V577L5psHNYTupVFeWMSYg7X8vOvZst7SZR7jFA8d61KNPkzGeRgf2S/wDjX+PE+tGut/aGB/ip/EKFZNWeI4uAqCELQNmMHWQZDFgIYeXzrOTKyXdm35wdyQCQD4kCuyy2EmIVOCmHhwWUQ4YsRyRSdRgQJiLmudPD8ZpUwsmNUEqJIkGOeqR5Gu1nJxKWV4crI7s0aARp3kwxtHSIq5k8rpMaxIETN+W3zq9ksiyDQQxVm7UqYJIO/UQK20cYZUjCgSFfUcPFidmQaRFuq2kViVs1GKXJm4Zw9eqFInDDaoLsCVBBO+3yqTOOjB9GGATrKECIkHRBtMWrQzObxCF1qgKMH7GGg1FSImEki5gfSocpmlJYjU5ibqiiVIBAIMm03EAxWadHS0QJl1JLDDjc2YnpvII3FF8izkSWjlFwN5kgfq1bOWzCFFZkQlj+MSiwxJILB1PYYXEEkb1KmYT4MQIjwG1s7ONJsRpc6dU9Bz2oosjkjFTgCRJ0wI+JoEeO/wAqhbCyuGTLqTfspL9OYO/jWhxdcpiJpRyHBgOMNlQyQNLtoVL7AzMkC9V8t7Ni+vESwmNURv8Aq9ap9sy5rpDcripiNGGiWPxObjvCpHfV98jmh8BCj/IoT53JrQ4PgZZQhXEWHuNhMLJ2g8xvW2+ewJ0a+g2JFwx3G3wn9EUxRMmcrkOEYrPOKNY5yx27xsa6fLcBywv7lJ66R9KsriYKbuo23BAvYbjrVzAzKMqsGEPBFomRItytRIWUm4Tg8kUeUUsXh6HZV9Kt/b8Kw1iWUssgwQAD+TA1EOI4LOijEDM0jSsmCFD9qPhsOfWqwZ44Mk/Cv8NWU4Lg88NDP+UVOmfwSgxfeLoMEMSQL2G9wZtHWrYzGGACXXtQAepb4QOtQFFeCZf/AA0/hFSLwLLzPu08lA9KtjM4e2ofFo5iW064HU6b+tOGaQRfdimx3EyLjuNAVV4JhD7g+X0oPwTCP3fQmqWf4xBw4K6W1ayjKzWAIgct5iTY1jZf2twy4Qe+UO+jWXwypaY/FO0EDpWaN0dA/s1lmnVhKZ691R/2Sy1/3aiem48KmyXtDhOiliNZAkLt89pjqfOhj8eRkJTT3azAMEWIiflVog3+y+WbtRvf4jzvSrl8D2o0qq9AB/dvyEfhpUxB5hmsTS3wlCLQqgeREeHptWoRisqs2hFYSAulTY/eYePKtzjGbw1I1HDUgQCzBmv0FzFUzl2cK6PKts0R0G5H866wkpcqjlJOPyVMtgLf3mMUQQQxZzssELDAgzJm8z66KcFwbk51nDRpGH75yDHMDefERTcjw1i3ZvvfntB3/V67DhnCzILjVHcPnSVXoRba2csOHMP7tcXEg2Lvo1CDuqliRcnlcemG+ZAdMNWGpmVQqO8QSBBdnhbc+XrPr+NgKmG7AAEIxtaOz5d21ea8SxkVyxGEh5MTe3QG4vWM6dUbxtXZ0HDPZcx+9dhNtCO9h0Lk6m33AWtnD9lsvz974/aMef8AzrdGAJtUgwv11qmTmsx7H4TAhMXHWeuI7Dedi0/Os7MezLIZZndbife4oHS+lgfW3jNdyUBqpxQacHEMxKnrzgeY+tG6VlSs8ywRhNj4OBgnEdj7wPhrjGYCEp29WlVkSecAiDYHssp7JAicV3U2OjDfEIFti7nt+Ola5Ph64S5zBYIgJxMMajG5ZR2J752r1iKJqQacTnV9kcvHx4/j715+ZqtmPY5I7GYxR0DsWHy011sUYoLPOsz7POh7etgZEh+yJt2SFJmJsQOVVMjk8uX92mJjvixIw00FrRd7BVWJuzDcDevQ+LsowcTkNMGw2MA72iDFeZ+z+DhJn8NkQLLkTIAgqwEAWi/yqOSTouLas6fA9jNSlXxWRWnsIQ8c51MAJ5wFIB5mrI9ikAA+05m1x/cbzP8Ahdb10a4yzpmWiYFzFxPhIolx4WkyYt18KWDk8f2NeOxmnMHUA64Yg9Qyp0nlzrOzPBMdG/e4uJpPNPdATeCWZGBPhf8AM9vn83h4akuyDYRIntEKDBMxf0BrIxvaPLuHQPB0kDsELYHmRBuBt1FTKiqLZwz8LKqqYeYDtsqPhqzm4B7AQsREy21rm1pl4TmcJDi4roigrKLhozETCglSAu/ImJmq3ClwcHPJiKXjmZYdlhpjtGWE3O47PdFdN7WcZwsREwUeLq7kjlEhdu8Ge4UTT4I048mVlsHUA6YiJqJYIbgXYdlTPOaoJx0sOwxKm4IAAO24NxV7LcVTCwkSQfiCnSYbUzEHVqEXYcj8J62wsLJKiwuKjlQBpTfpNNbs1UtV2XxxE9/y+lGs8IOpHdO1KrcS1M3cH2KAYNiIiLdmMrtEgAapubd03rTxMnoCKuGrqQIHZGx+EieWx8D0rmxnM6ywmWaLfFpBvMknVPM+pqxw7JZ9nLrgIuIdRLuTGkyo2BBtIju76tV2YpdnWZRmVdBwgI+7Y+fX1mtHDzNvh/XlWdwHIZ5cQNmcTDKBCoRC5APZg3tYAi0G9dC2GDyX5/nM1NjSMvieLrwnTRZ0ZDygMCN689yvsqqurMoPa3J+t69UfBB5R+vOmfZh+fQfkKbI0mRJnxF1+dPGfX8P5fWnDKp0ojLL0/Omy6IznjyCDn2mv8hWfxsNi4GImsdpY7JYHcHsledhz8a1PdKOXzpjYSdYHX+tTYPNuC+z3u8wmIVZmVgwLKzXGxmbV6Kmfe0oPI1VfM4CoH19knSCAxvJEd1xEm1Yee9p1UQmG4I/EVIaRqAGlrW3qOVdlUH6OrGebmnzsPlTf2neNN+mpZ58jfkfQ1xeX9qXKBmQzpUEiANeqGMa5AI9DWbmM02rUyvOwOpp5zcMdwWHn31lzo1GFnT8d4yuLhYmEhcE6V1IASDqGx5QQBfrFcZ7O5NEzC4uIXfQ8Ek3U9YPidoq1hZoLdsMiDrJBefgkc7HUJnkOtTcP4mpmFcKzNJEsYkw0PubAEefdWcpXdnRxjXDNbOcTxCWdMaFB09nSDCklRY8wCY5/nk4HE2dyj5jFOExSXmXJhtp+7JHgRNa2SLu4gagHVwO0dKyt9I2krMTziathcRgVCWJcTteSTaOnKeVY/Zs2nFKhDg+DjfvmfF1SoDuJZphVIOokrcCamx/ZpSF04zpGhBpVTbSFAhpHIVBwzhLpjh3xnYQUGE0aE7ErGljB7AvH51Y/ajMhPu7CJ1M0X28b+gq4N8MzlRh8RyIDjQTIYlm0N2tLQeoZWsZEbxUGNl2LlyqzER7twOkxpgnp4CtfG4mQ4bQCQr9TA7Jmw5R3QNtyazMH2hx8co+Dh9gsNQYidMkMFAhZiIknci16601tszfSSK/H847qhCGZiCwgbtzvFhypKisgK4MGAVIIAIgDtSZ6nYVf4x2XRBh6GfUZIEgEEaigAJ7UbD7w2FWcPIIBcMxt9xgLfXv+VZ47Ld9Gf8AaMP/AAH/AO3/AH0q0/suH/ht/AaNWvlE+jsRhi9v1agBSpV1OATzpzfT+dKlUAhTGpUqAXOgOdGlVA0VQ9oR/wClzH/04v8A4NRpVHwajyjx/CwF97h2F2We+61pZu2E7AkERBBI/D0pUq83+vo9v+fs6/h3DsJcMQi+d+ffVT2gyOGhwlVFUFGJCiJjFYcu6hSrr5P5PMuTCzygYbWGx5CockYwAecb+dKlXJcHRk+XzmImLgFXILIk8wYYDY2+8fWtzKZp3w9TGSRiyYAmBiDkKVKtS5C/kl9ss7iYQBw3KFmElbE/uzWFl+J4wXEcYjal90ATciV76VKrEzP+UWuF8bzGI8PiEgwIhfpV32bxmXB0g2DPA3i/fSpVv/RlfwOzmM32j4j2UGmLae1yiuyyF1Qm8hZ77ClSrl5DaJKVKlQyf//Z"
            alt="city"
          />
          <h3 className="text-lg text-c3 dark:text-c7">Paris, France</h3>
          <p className="text-sm font-medium text-c4">310 destinations</p>
        </div>

        <div className=" flex flex-col gap-2 w-[250px] min-w-[230px]    md:w-[220px] hover:bg-c7 dark:hover:bg-c2 hover:shadow-md  md:h-[180px] mt-6 p-4 border-c6 dark:border-c3 border-[1px] rounded-lg shadow-md">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src="https://www.gavroche-thailande.com/wp-content/uploads/2021/09/bali-hotel-nature.jpg"
            alt="city"
          />
          <h3 className="text-lg text-c3 dark:text-c7">Bali, Indonesia</h3>
          <p className="text-sm font-medium text-c4">243 destinations</p>
        </div>

        <div className=" flex flex-col gap-2 w-[250px] min-w-[230px]    md:w-[220px] hover:bg-c7 dark:hover:bg-c2 hover:shadow-md  md:h-[180px] mt-6 p-4 border-c6 dark:border-c3 border-[1px] rounded-lg shadow-md">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src="https://a.cdn-hotels.com/gdcs/production40/d811/5e89ad90-8f10-11e8-b6b0-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            alt="city"
          />
          <h3 className="text-lg text-c3 dark:text-c7">Rome, Italy</h3>
          <p className="text-sm font-medium text-c4">187 destinations</p>
        </div>

        <div className=" flex flex-col gap-2 w-[250px] min-w-[230px]    md:w-[220px] hover:bg-c7 dark:hover:bg-c2 hover:shadow-md  md:h-[180px] mt-6 p-4 border-c6 dark:border-c3 border-[1px] rounded-lg shadow-md">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src="https://planetofhotels.com/guide/sites/default/files/styles/max_1280/public/hero_banner/Koutoubia-Mosque-minaret.jpg"
            alt="city"
          />
          <h3 className="text-lg text-c3 dark:text-c7">Marrakesh, Maroc</h3>
          <p className="text-sm font-medium text-c4">271 destinations</p>
        </div>

        <div className=" flex flex-col gap-2 w-[250px] min-w-[230px]    md:w-[220px] hover:bg-c7 dark:hover:bg-c2 hover:shadow-md  md:h-[180px] mt-6 p-4 border-c6 dark:border-c3 border-[1px] rounded-lg shadow-md">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src="https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/gettyrf_185773562_1.jpg?itok=BsJok17r"
            alt="city"
          />
          <h3 className="text-lg text-c3 dark:text-c7">New York, US</h3>
          <p className="text-sm font-medium text-c4">417 destinations</p>
        </div>

        <div className=" flex flex-col gap-2 w-[250px] min-w-[230px]    md:w-[220px] hover:bg-c7 dark:hover:bg-c2 hover:shadow-md  md:h-[180px] mt-6 p-4 border-c6 dark:border-c3 border-[1px] rounded-lg shadow-md">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src="https://www.voyages-grece.com/wp-content/uploads/2021/10/visiter-pyrgos-1.webp"
            alt="city"
          />
          <h3 className="text-lg text-c3 dark:text-c7">Mykonos,Greece</h3>
          <p className="text-sm font-medium text-c4">291 destinations</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
