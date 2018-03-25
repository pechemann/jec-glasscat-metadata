//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

/**
 * Stores metadata for a GlassCat server.
 */
export class GlassCatMetadata {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Creates a new <code>GlassCatMetadata</code> instance.
   */
  constructor() {}
  
  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * A string that represents the GlassCat server identifier. ID must be a
   * Version 4 UUID.
   */
  public id:string = null;
  
  /**
   * A string that represents the GlassCat server creation date, as returned by
   * a new <code>Date</code> object.
   */
  public creation:string = null;
  
  /**
   * The GlassCat server version.
   */
  public version:string = null;
}