# Install script for directory: /home/joel/Documents/dev/py-mahi-gui/mahi-gui

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/usr/local")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Debug")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/glfw/src/libglfw3.a")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/glad/libglad.a")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/nativefiledialog-extended/src/libnfd.a")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/nanovg/libnanovg.a")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/clipper/libclipper.a")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/libmahi-gui-d.a")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/include/")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/glad/include/")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES
    "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/imgui/imconfig.h"
    "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/imgui/imgui_internal.h"
    "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/imgui/imgui.h"
    "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/imgui/imstb_rectpack.h"
    "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/imgui/imstb_textedit.h"
    "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/imgui/imstb_truetype.h"
    "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/imgui/imgui_stdlib.h"
    )
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/implot/implot.h")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/nanovg/src/nanovg.h")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/nanosvg/src/nanosvg.h")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES "/home/joel/Documents/dev/py-mahi-gui/mahi-gui/3rdparty/clipper/clipper.hpp")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/cmake/mahi-gui/mahi-gui-targets.cmake")
    file(DIFFERENT EXPORT_FILE_CHANGED FILES
         "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/cmake/mahi-gui/mahi-gui-targets.cmake"
         "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/CMakeFiles/Export/lib/cmake/mahi-gui/mahi-gui-targets.cmake")
    if(EXPORT_FILE_CHANGED)
      file(GLOB OLD_CONFIG_FILES "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/cmake/mahi-gui/mahi-gui-targets-*.cmake")
      if(OLD_CONFIG_FILES)
        message(STATUS "Old export file \"$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/cmake/mahi-gui/mahi-gui-targets.cmake\" will be replaced.  Removing files [${OLD_CONFIG_FILES}].")
        file(REMOVE ${OLD_CONFIG_FILES})
      endif()
    endif()
  endif()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/cmake/mahi-gui" TYPE FILE FILES "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/CMakeFiles/Export/lib/cmake/mahi-gui/mahi-gui-targets.cmake")
  if("${CMAKE_INSTALL_CONFIG_NAME}" MATCHES "^([Dd][Ee][Bb][Uu][Gg])$")
    file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/cmake/mahi-gui" TYPE FILE FILES "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/CMakeFiles/Export/lib/cmake/mahi-gui/mahi-gui-targets-debug.cmake")
  endif()
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xUnspecifiedx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/cmake/mahi-gui" TYPE FILE FILES
    "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/mahi-gui-config.cmake"
    "/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/mahi-gui-config-version.cmake"
    )
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
  include("/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/glfw/cmake_install.cmake")
  include("/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/glad/cmake_install.cmake")
  include("/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/nativefiledialog-extended/cmake_install.cmake")
  include("/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/nanovg/cmake_install.cmake")
  include("/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/3rdparty/clipper/cmake_install.cmake")
  include("/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/_deps/mahi-util-build/cmake_install.cmake")
  include("/home/joel/Documents/dev/py-mahi-gui/cmake-build-debug/mahi-gui/src/Mahi/Gui/cmake_install.cmake")

endif()

