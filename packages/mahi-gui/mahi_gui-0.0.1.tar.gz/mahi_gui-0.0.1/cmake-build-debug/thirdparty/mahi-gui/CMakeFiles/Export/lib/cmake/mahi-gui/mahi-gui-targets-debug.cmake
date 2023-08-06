#----------------------------------------------------------------
# Generated CMake target import file for configuration "Debug".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "mahi::glfw" for configuration "Debug"
set_property(TARGET mahi::glfw APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(mahi::glfw PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "C"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/libglfw3.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS mahi::glfw )
list(APPEND _IMPORT_CHECK_FILES_FOR_mahi::glfw "${_IMPORT_PREFIX}/lib/libglfw3.a" )

# Import target "mahi::glad" for configuration "Debug"
set_property(TARGET mahi::glad APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(mahi::glad PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "C"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/libglad.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS mahi::glad )
list(APPEND _IMPORT_CHECK_FILES_FOR_mahi::glad "${_IMPORT_PREFIX}/lib/libglad.a" )

# Import target "mahi::nanovg" for configuration "Debug"
set_property(TARGET mahi::nanovg APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(mahi::nanovg PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "C"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/libnanovg.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS mahi::nanovg )
list(APPEND _IMPORT_CHECK_FILES_FOR_mahi::nanovg "${_IMPORT_PREFIX}/lib/libnanovg.a" )

# Import target "mahi::clipper" for configuration "Debug"
set_property(TARGET mahi::clipper APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(mahi::clipper PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/libclipper.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS mahi::clipper )
list(APPEND _IMPORT_CHECK_FILES_FOR_mahi::clipper "${_IMPORT_PREFIX}/lib/libclipper.a" )

# Import target "mahi::gui" for configuration "Debug"
set_property(TARGET mahi::gui APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(mahi::gui PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/libmahi-gui-d.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS mahi::gui )
list(APPEND _IMPORT_CHECK_FILES_FOR_mahi::gui "${_IMPORT_PREFIX}/lib/libmahi-gui-d.a" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
